# Candidate

Information about a candidate running for elected office.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidate_url** | **str** | The URL for the candidate&#39;s campaign web site. | [optional] 
**channels** | [**List[Channel]**](Channel.md) | A list of known (social) media channels for this candidate. | [optional] 
**email** | **str** | The email address for the candidate&#39;s campaign. | [optional] 
**name** | **str** | The candidate&#39;s name. If this is a joint ticket it will indicate the name of the candidate at the top of a ticket followed by a / and that name of candidate at the bottom of the ticket. e.g. \&quot;Mitt Romney / Paul Ryan\&quot; | [optional] 
**order_on_ballot** | **str** | The order the candidate appears on the ballot for this contest. | [optional] 
**party** | **str** | The full name of the party the candidate is a member of. | [optional] 
**phone** | **str** | The voice phone number for the candidate&#39;s campaign office. | [optional] 
**photo_url** | **str** | A URL for a photo of the candidate. | [optional] 

## Example

```python
from openapi_client.models.candidate import Candidate

# TODO update the JSON string below
json = "{}"
# create an instance of Candidate from a JSON string
candidate_instance = Candidate.from_json(json)
# print the JSON string representation of the object
print(Candidate.to_json())

# convert the object into a dict
candidate_dict = candidate_instance.to_dict()
# create an instance of Candidate from a dict
candidate_from_dict = Candidate.from_dict(candidate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


