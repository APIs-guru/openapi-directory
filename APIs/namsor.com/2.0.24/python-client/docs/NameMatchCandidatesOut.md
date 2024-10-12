# NameMatchCandidatesOut

Classified matched names

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** | The first name (also known as given name) | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** | The last name (also known as family name, or surname) | [optional] 
**match_candidates** | [**List[NameMatchCandidateOut]**](NameMatchCandidateOut.md) | The ordered list of name matching candidates | [optional] 
**order_option** | **str** | The option for ordering | [optional] 
**script** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.name_match_candidates_out import NameMatchCandidatesOut

# TODO update the JSON string below
json = "{}"
# create an instance of NameMatchCandidatesOut from a JSON string
name_match_candidates_out_instance = NameMatchCandidatesOut.from_json(json)
# print the JSON string representation of the object
print(NameMatchCandidatesOut.to_json())

# convert the object into a dict
name_match_candidates_out_dict = name_match_candidates_out_instance.to_dict()
# create an instance of NameMatchCandidatesOut from a dict
name_match_candidates_out_from_dict = NameMatchCandidatesOut.from_dict(name_match_candidates_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


