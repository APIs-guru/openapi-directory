# ErrorsListForGroup200ResponseErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** |  | [optional] 
**device_name** | **str** |  | [optional] 
**error_id** | **str** |  | [optional] 
**has_attachments** | **bool** |  | [optional] 
**has_breadcrumbs** | **bool** |  | [optional] 
**language** | **str** |  | [optional] 
**os_type** | **str** |  | [optional] 
**os_version** | **str** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.errors_list_for_group200_response_errors_inner import ErrorsListForGroup200ResponseErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsListForGroup200ResponseErrorsInner from a JSON string
errors_list_for_group200_response_errors_inner_instance = ErrorsListForGroup200ResponseErrorsInner.from_json(json)
# print the JSON string representation of the object
print(ErrorsListForGroup200ResponseErrorsInner.to_json())

# convert the object into a dict
errors_list_for_group200_response_errors_inner_dict = errors_list_for_group200_response_errors_inner_instance.to_dict()
# create an instance of ErrorsListForGroup200ResponseErrorsInner from a dict
errors_list_for_group200_response_errors_inner_from_dict = ErrorsListForGroup200ResponseErrorsInner.from_dict(errors_list_for_group200_response_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


