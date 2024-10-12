# V2MissingSymbolCrashGroup

missing symbol crash group object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_build** | **str** | application build | 
**app_id** | **str** | application id | 
**app_ver** | **str** | application version | 
**crash_count** | **int** | number of crashes that belong to this group | [optional] 
**error_count** | **int** | number of errors that belong to this group | [optional] 
**last_modified** | **datetime** | last update date for the group | 
**missing_symbols** | [**List[MissingSymbolGroupsList200ResponseGroupsInnerMissingSymbolsInner]**](MissingSymbolGroupsList200ResponseGroupsInnerMissingSymbolsInner.md) | list of missing symbols | 
**status** | **str** | group status | 
**symbol_group_id** | **str** | id of the symbol group | 

## Example

```python
from openapi_client.models.v2_missing_symbol_crash_group import V2MissingSymbolCrashGroup

# TODO update the JSON string below
json = "{}"
# create an instance of V2MissingSymbolCrashGroup from a JSON string
v2_missing_symbol_crash_group_instance = V2MissingSymbolCrashGroup.from_json(json)
# print the JSON string representation of the object
print(V2MissingSymbolCrashGroup.to_json())

# convert the object into a dict
v2_missing_symbol_crash_group_dict = v2_missing_symbol_crash_group_instance.to_dict()
# create an instance of V2MissingSymbolCrashGroup from a dict
v2_missing_symbol_crash_group_from_dict = V2MissingSymbolCrashGroup.from_dict(v2_missing_symbol_crash_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


