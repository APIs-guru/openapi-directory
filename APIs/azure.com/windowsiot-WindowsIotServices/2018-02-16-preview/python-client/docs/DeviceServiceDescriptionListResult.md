# DeviceServiceDescriptionListResult

The JSON-serialized array of DeviceService objects with a next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The next link. | [optional] [readonly] 
**value** | [**List[DeviceService]**](DeviceService.md) | The array of DeviceService objects. | [optional] 

## Example

```python
from openapi_client.models.device_service_description_list_result import DeviceServiceDescriptionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceServiceDescriptionListResult from a JSON string
device_service_description_list_result_instance = DeviceServiceDescriptionListResult.from_json(json)
# print the JSON string representation of the object
print(DeviceServiceDescriptionListResult.to_json())

# convert the object into a dict
device_service_description_list_result_dict = device_service_description_list_result_instance.to_dict()
# create an instance of DeviceServiceDescriptionListResult from a dict
device_service_description_list_result_from_dict = DeviceServiceDescriptionListResult.from_dict(device_service_description_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


