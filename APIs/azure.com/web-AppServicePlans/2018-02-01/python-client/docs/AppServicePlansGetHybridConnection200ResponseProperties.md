# AppServicePlansGetHybridConnection200ResponseProperties

HybridConnection resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostname** | **str** | The hostname of the endpoint. | [optional] 
**port** | **int** | The port of the endpoint. | [optional] 
**relay_arm_uri** | **str** | The ARM URI to the Service Bus relay. | [optional] 
**relay_name** | **str** | The name of the Service Bus relay. | [optional] 
**send_key_name** | **str** | The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus. | [optional] 
**send_key_value** | **str** | The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned normally, use the POST /listKeys API instead. | [optional] 
**service_bus_namespace** | **str** | The name of the Service Bus namespace. | [optional] 
**service_bus_suffix** | **str** | The suffix for the service bus endpoint. By default this is .servicebus.windows.net | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_get_hybrid_connection200_response_properties import AppServicePlansGetHybridConnection200ResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansGetHybridConnection200ResponseProperties from a JSON string
app_service_plans_get_hybrid_connection200_response_properties_instance = AppServicePlansGetHybridConnection200ResponseProperties.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansGetHybridConnection200ResponseProperties.to_json())

# convert the object into a dict
app_service_plans_get_hybrid_connection200_response_properties_dict = app_service_plans_get_hybrid_connection200_response_properties_instance.to_dict()
# create an instance of AppServicePlansGetHybridConnection200ResponseProperties from a dict
app_service_plans_get_hybrid_connection200_response_properties_from_dict = AppServicePlansGetHybridConnection200ResponseProperties.from_dict(app_service_plans_get_hybrid_connection200_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


