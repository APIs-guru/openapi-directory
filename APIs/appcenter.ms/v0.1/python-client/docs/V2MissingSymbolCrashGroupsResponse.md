# V2MissingSymbolCrashGroupsResponse

grouped by missing symbols crashes response object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**List[MissingSymbolGroupsList200ResponseGroupsInner]**](MissingSymbolGroupsList200ResponseGroupsInner.md) | list of crash groups formed by missing symbols combination | 
**total_crash_count** | **int** | total number of crashes for all the groups | 

## Example

```python
from openapi_client.models.v2_missing_symbol_crash_groups_response import V2MissingSymbolCrashGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V2MissingSymbolCrashGroupsResponse from a JSON string
v2_missing_symbol_crash_groups_response_instance = V2MissingSymbolCrashGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(V2MissingSymbolCrashGroupsResponse.to_json())

# convert the object into a dict
v2_missing_symbol_crash_groups_response_dict = v2_missing_symbol_crash_groups_response_instance.to_dict()
# create an instance of V2MissingSymbolCrashGroupsResponse from a dict
v2_missing_symbol_crash_groups_response_from_dict = V2MissingSymbolCrashGroupsResponse.from_dict(v2_missing_symbol_crash_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


