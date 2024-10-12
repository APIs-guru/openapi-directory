# VoterInfoResponse

The result of a voter info lookup query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contests** | [**List[Contest]**](Contest.md) | Contests that will appear on the voter&#39;s ballot. | [optional] 
**drop_off_locations** | [**List[PollingLocation]**](PollingLocation.md) | Locations where a voter is eligible to drop off a completed ballot. The voter must have received and completed a ballot prior to arriving at the location. The location may not have ballots available on the premises. These locations could be open on or before election day as indicated in the pollingHours field. | [optional] 
**early_vote_sites** | [**List[PollingLocation]**](PollingLocation.md) | Locations where the voter is eligible to vote early, prior to election day. | [optional] 
**election** | [**Election**](Election.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;civicinfo#voterInfoResponse\&quot;. | [optional] [default to 'civicinfo#voterInfoResponse']
**mail_only** | **bool** | Specifies whether voters in the precinct vote only by mailing their ballots (with the possible option of dropping off their ballots as well). | [optional] 
**normalized_input** | [**SimpleAddressType**](SimpleAddressType.md) |  | [optional] 
**other_elections** | [**List[Election]**](Election.md) | When there are multiple elections for a voter address, the otherElections field is populated in the API response and there are two possibilities: 1. If the earliest election is not the intended election, specify the election ID of the desired election in a second API request using the electionId field. 2. If these elections occur on the same day, the API doesn?t return any polling location, contest, or election official information to ensure that an additional query is made. For user-facing applications, we recommend displaying these elections to the user to disambiguate. A second API request using the electionId field should be made for the election that is relevant to the user. | [optional] 
**polling_locations** | [**List[PollingLocation]**](PollingLocation.md) | Locations where the voter is eligible to vote on election day. | [optional] 
**precinct_id** | **str** |  | [optional] 
**precincts** | [**List[Precinct]**](Precinct.md) | The precincts that match this voter&#39;s address. Will only be returned for project IDs which have been allowlisted as \&quot;partner projects\&quot;. | [optional] 
**state** | [**List[AdministrationRegion]**](AdministrationRegion.md) | Local Election Information for the state that the voter votes in. For the US, there will only be one element in this array. | [optional] 

## Example

```python
from openapi_client.models.voter_info_response import VoterInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VoterInfoResponse from a JSON string
voter_info_response_instance = VoterInfoResponse.from_json(json)
# print the JSON string representation of the object
print(VoterInfoResponse.to_json())

# convert the object into a dict
voter_info_response_dict = voter_info_response_instance.to_dict()
# create an instance of VoterInfoResponse from a dict
voter_info_response_from_dict = VoterInfoResponse.from_dict(voter_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


