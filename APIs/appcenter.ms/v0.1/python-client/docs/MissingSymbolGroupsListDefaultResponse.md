# MissingSymbolGroupsListDefaultResponse

failure response object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from openapi_client.models.missing_symbol_groups_list_default_response import MissingSymbolGroupsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MissingSymbolGroupsListDefaultResponse from a JSON string
missing_symbol_groups_list_default_response_instance = MissingSymbolGroupsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(MissingSymbolGroupsListDefaultResponse.to_json())

# convert the object into a dict
missing_symbol_groups_list_default_response_dict = missing_symbol_groups_list_default_response_instance.to_dict()
# create an instance of MissingSymbolGroupsListDefaultResponse from a dict
missing_symbol_groups_list_default_response_from_dict = MissingSymbolGroupsListDefaultResponse.from_dict(missing_symbol_groups_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


