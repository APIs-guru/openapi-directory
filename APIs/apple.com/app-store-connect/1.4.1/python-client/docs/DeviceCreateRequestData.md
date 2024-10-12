# DeviceCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**DeviceCreateRequestDataAttributes**](DeviceCreateRequestDataAttributes.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.device_create_request_data import DeviceCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceCreateRequestData from a JSON string
device_create_request_data_instance = DeviceCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(DeviceCreateRequestData.to_json())

# convert the object into a dict
device_create_request_data_dict = device_create_request_data_instance.to_dict()
# create an instance of DeviceCreateRequestData from a dict
device_create_request_data_from_dict = DeviceCreateRequestData.from_dict(device_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


