# DeviceUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**DeviceUpdateRequestDataAttributes**](DeviceUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.device_update_request_data import DeviceUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceUpdateRequestData from a JSON string
device_update_request_data_instance = DeviceUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(DeviceUpdateRequestData.to_json())

# convert the object into a dict
device_update_request_data_dict = device_update_request_data_instance.to_dict()
# create an instance of DeviceUpdateRequestData from a dict
device_update_request_data_from_dict = DeviceUpdateRequestData.from_dict(device_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


