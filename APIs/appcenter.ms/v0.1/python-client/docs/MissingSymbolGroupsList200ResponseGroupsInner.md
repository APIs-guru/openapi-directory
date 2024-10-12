# MissingSymbolGroupsList200ResponseGroupsInner

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
from openapi_client.models.missing_symbol_groups_list200_response_groups_inner import MissingSymbolGroupsList200ResponseGroupsInner

# TODO update the JSON string below
json = "{}"
# create an instance of MissingSymbolGroupsList200ResponseGroupsInner from a JSON string
missing_symbol_groups_list200_response_groups_inner_instance = MissingSymbolGroupsList200ResponseGroupsInner.from_json(json)
# print the JSON string representation of the object
print(MissingSymbolGroupsList200ResponseGroupsInner.to_json())

# convert the object into a dict
missing_symbol_groups_list200_response_groups_inner_dict = missing_symbol_groups_list200_response_groups_inner_instance.to_dict()
# create an instance of MissingSymbolGroupsList200ResponseGroupsInner from a dict
missing_symbol_groups_list200_response_groups_inner_from_dict = MissingSymbolGroupsList200ResponseGroupsInner.from_dict(missing_symbol_groups_list200_response_groups_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


