# DeviceAvailability

...

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **float** |  | 
**maximum** | **float** |  | 
**registered** | **float** |  | 

## Example

```python
from openapi_client.models.device_availability import DeviceAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceAvailability from a JSON string
device_availability_instance = DeviceAvailability.from_json(json)
# print the JSON string representation of the object
print(DeviceAvailability.to_json())

# convert the object into a dict
device_availability_dict = device_availability_instance.to_dict()
# create an instance of DeviceAvailability from a dict
device_availability_from_dict = DeviceAvailability.from_dict(device_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


