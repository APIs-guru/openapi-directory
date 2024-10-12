# ErrorsGroupDetails200Response


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
from openapi_client.models.errors_group_details200_response import ErrorsGroupDetails200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsGroupDetails200Response from a JSON string
errors_group_details200_response_instance = ErrorsGroupDetails200Response.from_json(json)
# print the JSON string representation of the object
print(ErrorsGroupDetails200Response.to_json())

# convert the object into a dict
errors_group_details200_response_dict = errors_group_details200_response_instance.to_dict()
# create an instance of ErrorsGroupDetails200Response from a dict
errors_group_details200_response_from_dict = ErrorsGroupDetails200Response.from_dict(errors_group_details200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


