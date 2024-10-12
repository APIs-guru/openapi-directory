# AdministrativeBody

Information about an election administrative body (e.g. County Board of Elections).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**absentee_voting_info_url** | **str** | A URL provided by this administrative body for information on absentee voting. | [optional] 
**ballot_info_url** | **str** | A URL provided by this administrative body to give contest information to the voter. | [optional] 
**correspondence_address** | [**SimpleAddressType**](SimpleAddressType.md) |  | [optional] 
**election_info_url** | **str** | A URL provided by this administrative body for looking up general election information. | [optional] 
**election_notice_text** | **str** | A last minute or emergency notification text provided by this administrative body. | [optional] 
**election_notice_url** | **str** | A URL provided by this administrative body for additional information related to the last minute or emergency notification. | [optional] 
**election_officials** | [**List[ElectionOfficial]**](ElectionOfficial.md) | The election officials for this election administrative body. | [optional] 
**election_registration_confirmation_url** | **str** | A URL provided by this administrative body for confirming that the voter is registered to vote. | [optional] 
**election_registration_url** | **str** | A URL provided by this administrative body for looking up how to register to vote. | [optional] 
**election_rules_url** | **str** | A URL provided by this administrative body describing election rules to the voter. | [optional] 
**hours_of_operation** | **str** | A description of the hours of operation for this administrative body. | [optional] 
**name** | **str** | The name of this election administrative body. | [optional] 
**physical_address** | [**SimpleAddressType**](SimpleAddressType.md) |  | [optional] 
**voter_services** | **List[str]** | A description of the services this administrative body may provide. | [optional] 
**voting_location_finder_url** | **str** | A URL provided by this administrative body for looking up where to vote. | [optional] 

## Example

```python
from openapi_client.models.administrative_body import AdministrativeBody

# TODO update the JSON string below
json = "{}"
# create an instance of AdministrativeBody from a JSON string
administrative_body_instance = AdministrativeBody.from_json(json)
# print the JSON string representation of the object
print(AdministrativeBody.to_json())

# convert the object into a dict
administrative_body_dict = administrative_body_instance.to_dict()
# create an instance of AdministrativeBody from a dict
administrative_body_from_dict = AdministrativeBody.from_dict(administrative_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


