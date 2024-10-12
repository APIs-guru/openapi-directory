# DeviceService

The description of the Windows IoT Device Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention. | [optional] 
**properties** | [**DeviceServiceProperties**](DeviceServiceProperties.md) |  | [optional] 
**location** | **str** | The Azure Region where the resource lives | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.device_service import DeviceService

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceService from a JSON string
device_service_instance = DeviceService.from_json(json)
# print the JSON string representation of the object
print(DeviceService.to_json())

# convert the object into a dict
device_service_dict = device_service_instance.to_dict()
# create an instance of DeviceService from a dict
device_service_from_dict = DeviceService.from_dict(device_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


