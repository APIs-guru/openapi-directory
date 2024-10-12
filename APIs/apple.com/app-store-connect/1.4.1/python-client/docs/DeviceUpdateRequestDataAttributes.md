# DeviceUpdateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.device_update_request_data_attributes import DeviceUpdateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceUpdateRequestDataAttributes from a JSON string
device_update_request_data_attributes_instance = DeviceUpdateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(DeviceUpdateRequestDataAttributes.to_json())

# convert the object into a dict
device_update_request_data_attributes_dict = device_update_request_data_attributes_instance.to_dict()
# create an instance of DeviceUpdateRequestDataAttributes from a dict
device_update_request_data_attributes_from_dict = DeviceUpdateRequestDataAttributes.from_dict(device_update_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


