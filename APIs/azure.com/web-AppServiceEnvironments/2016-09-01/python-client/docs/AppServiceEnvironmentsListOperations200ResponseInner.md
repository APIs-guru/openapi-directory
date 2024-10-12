# AppServiceEnvironmentsListOperations200ResponseInner

An operation on a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **datetime** | Time when operation has started. | [optional] 
**errors** | [**List[AppServiceEnvironmentsListOperations200ResponseInnerErrorsInner]**](AppServiceEnvironmentsListOperations200ResponseInnerErrorsInner.md) | Any errors associate with the operation. | [optional] 
**expiration_time** | **datetime** | Time when operation will expire. | [optional] 
**geo_master_operation_id** | **str** | Applicable only for stamp operation ids. | [optional] 
**id** | **str** | Operation ID. | [optional] 
**modified_time** | **datetime** | Time when operation has been updated. | [optional] 
**name** | **str** | Operation name. | [optional] 
**status** | **str** | The current status of the operation. | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_list_operations200_response_inner import AppServiceEnvironmentsListOperations200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsListOperations200ResponseInner from a JSON string
app_service_environments_list_operations200_response_inner_instance = AppServiceEnvironmentsListOperations200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsListOperations200ResponseInner.to_json())

# convert the object into a dict
app_service_environments_list_operations200_response_inner_dict = app_service_environments_list_operations200_response_inner_instance.to_dict()
# create an instance of AppServiceEnvironmentsListOperations200ResponseInner from a dict
app_service_environments_list_operations200_response_inner_from_dict = AppServiceEnvironmentsListOperations200ResponseInner.from_dict(app_service_environments_list_operations200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


