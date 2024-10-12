# ErrorGroupListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_build** | **str** |  | [optional] 
**app_version** | **str** |  | 
**code_raw** | **str** |  | [optional] 
**count** | **int** |  | 
**device_count** | **int** |  | 
**error_group_id** | **str** |  | 
**exception_app_code** | **bool** |  | [optional] 
**exception_class_method** | **bool** |  | [optional] 
**exception_class_name** | **str** |  | [optional] 
**exception_file** | **str** |  | [optional] 
**exception_line** | **str** |  | [optional] 
**exception_message** | **str** |  | [optional] 
**exception_method** | **str** |  | [optional] 
**exception_type** | **str** |  | [optional] 
**first_occurrence** | **datetime** |  | 
**hidden** | **bool** |  | [optional] 
**last_occurrence** | **datetime** |  | 
**reason_frames** | [**List[ErrorsGroupList200ResponseErrorGroupsInnerAllOfReasonFramesInner]**](ErrorsGroupList200ResponseErrorGroupsInnerAllOfReasonFramesInner.md) |  | [optional] 
**annotation** | **str** |  | [optional] 
**state** | **str** |  | 

## Example

```python
from openapi_client.models.error_group_list_item import ErrorGroupListItem

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorGroupListItem from a JSON string
error_group_list_item_instance = ErrorGroupListItem.from_json(json)
# print the JSON string representation of the object
print(ErrorGroupListItem.to_json())

# convert the object into a dict
error_group_list_item_dict = error_group_list_item_instance.to_dict()
# create an instance of ErrorGroupListItem from a dict
error_group_list_item_from_dict = ErrorGroupListItem.from_dict(error_group_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


