# MissingSymbolGroupsList200Response

grouped by missing symbols crashes response object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**List[MissingSymbolGroupsList200ResponseGroupsInner]**](MissingSymbolGroupsList200ResponseGroupsInner.md) | list of crash groups formed by missing symbols combination | 
**total_crash_count** | **int** | total number of crashes for all the groups | 

## Example

```python
from openapi_client.models.missing_symbol_groups_list200_response import MissingSymbolGroupsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of MissingSymbolGroupsList200Response from a JSON string
missing_symbol_groups_list200_response_instance = MissingSymbolGroupsList200Response.from_json(json)
# print the JSON string representation of the object
print(MissingSymbolGroupsList200Response.to_json())

# convert the object into a dict
missing_symbol_groups_list200_response_dict = missing_symbol_groups_list200_response_instance.to_dict()
# create an instance of MissingSymbolGroupsList200Response from a dict
missing_symbol_groups_list200_response_from_dict = MissingSymbolGroupsList200Response.from_dict(missing_symbol_groups_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


