# AppServiceEnvironmentsListOperations200ResponseInnerErrorsInner

Body of the error response returned from the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Basic error code. | [optional] 
**extended_code** | **str** | Type of error. | [optional] 
**inner_errors** | **List[object]** | Inner errors. | [optional] 
**message** | **str** | Any details of the error. | [optional] 
**message_template** | **str** | Message template. | [optional] 
**parameters** | **List[str]** | Parameters for the template. | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_list_operations200_response_inner_errors_inner import AppServiceEnvironmentsListOperations200ResponseInnerErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsListOperations200ResponseInnerErrorsInner from a JSON string
app_service_environments_list_operations200_response_inner_errors_inner_instance = AppServiceEnvironmentsListOperations200ResponseInnerErrorsInner.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsListOperations200ResponseInnerErrorsInner.to_json())

# convert the object into a dict
app_service_environments_list_operations200_response_inner_errors_inner_dict = app_service_environments_list_operations200_response_inner_errors_inner_instance.to_dict()
# create an instance of AppServiceEnvironmentsListOperations200ResponseInnerErrorsInner from a dict
app_service_environments_list_operations200_response_inner_errors_inner_from_dict = AppServiceEnvironmentsListOperations200ResponseInnerErrorsInner.from_dict(app_service_environments_list_operations200_response_inner_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


