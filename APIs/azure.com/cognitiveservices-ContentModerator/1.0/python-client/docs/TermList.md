# TermList

Term List  Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description for term list. | [optional] 
**id** | **int** | Term list Id. | [optional] 
**metadata** | **Dict[str, str]** | Term list metadata. | [optional] 
**name** | **str** | Term list name. | [optional] 

## Example

```python
from openapi_client.models.term_list import TermList

# TODO update the JSON string below
json = "{}"
# create an instance of TermList from a JSON string
term_list_instance = TermList.from_json(json)
# print the JSON string representation of the object
print(TermList.to_json())

# convert the object into a dict
term_list_dict = term_list_instance.to_dict()
# create an instance of TermList from a dict
term_list_from_dict = TermList.from_dict(term_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


