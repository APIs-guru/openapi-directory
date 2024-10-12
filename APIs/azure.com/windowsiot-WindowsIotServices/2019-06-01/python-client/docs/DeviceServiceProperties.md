# DeviceServiceProperties

The properties of a Windows IoT Device Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_domain_name** | **str** | Windows IoT Device Service OEM AAD domain | [optional] 
**billing_domain_name** | **str** | Windows IoT Device Service ODM AAD domain | [optional] 
**notes** | **str** | Windows IoT Device Service notes. | [optional] 
**quantity** | **int** | Windows IoT Device Service device allocation, | [optional] 
**start_date** | **datetime** | Windows IoT Device Service start date, | [optional] [readonly] 

## Example

```python
from openapi_client.models.device_service_properties import DeviceServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceServiceProperties from a JSON string
device_service_properties_instance = DeviceServiceProperties.from_json(json)
# print the JSON string representation of the object
print(DeviceServiceProperties.to_json())

# convert the object into a dict
device_service_properties_dict = device_service_properties_instance.to_dict()
# create an instance of DeviceServiceProperties from a dict
device_service_properties_from_dict = DeviceServiceProperties.from_dict(device_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


