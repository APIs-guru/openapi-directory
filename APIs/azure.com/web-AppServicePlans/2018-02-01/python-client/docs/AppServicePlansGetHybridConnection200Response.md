# AppServicePlansGetHybridConnection200Response

Hybrid Connection contract. This is used to configure a Hybrid Connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AppServicePlansGetHybridConnection200ResponseProperties**](AppServicePlansGetHybridConnection200ResponseProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_plans_get_hybrid_connection200_response import AppServicePlansGetHybridConnection200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansGetHybridConnection200Response from a JSON string
app_service_plans_get_hybrid_connection200_response_instance = AppServicePlansGetHybridConnection200Response.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansGetHybridConnection200Response.to_json())

# convert the object into a dict
app_service_plans_get_hybrid_connection200_response_dict = app_service_plans_get_hybrid_connection200_response_instance.to_dict()
# create an instance of AppServicePlansGetHybridConnection200Response from a dict
app_service_plans_get_hybrid_connection200_response_from_dict = AppServicePlansGetHybridConnection200Response.from_dict(app_service_plans_get_hybrid_connection200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


