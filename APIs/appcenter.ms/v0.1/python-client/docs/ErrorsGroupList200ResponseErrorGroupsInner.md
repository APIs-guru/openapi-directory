# ErrorsGroupList200ResponseErrorGroupsInner


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
from openapi_client.models.errors_group_list200_response_error_groups_inner import ErrorsGroupList200ResponseErrorGroupsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsGroupList200ResponseErrorGroupsInner from a JSON string
errors_group_list200_response_error_groups_inner_instance = ErrorsGroupList200ResponseErrorGroupsInner.from_json(json)
# print the JSON string representation of the object
print(ErrorsGroupList200ResponseErrorGroupsInner.to_json())

# convert the object into a dict
errors_group_list200_response_error_groups_inner_dict = errors_group_list200_response_error_groups_inner_instance.to_dict()
# create an instance of ErrorsGroupList200ResponseErrorGroupsInner from a dict
errors_group_list200_response_error_groups_inner_from_dict = ErrorsGroupList200ResponseErrorGroupsInner.from_dict(errors_group_list200_response_error_groups_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


