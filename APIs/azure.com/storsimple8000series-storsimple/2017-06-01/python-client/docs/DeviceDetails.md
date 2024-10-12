# DeviceDetails

The additional device details regarding the end point count and volume container count.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_count** | **int** | The total number of endpoints that are currently on the device ( i.e. number of volumes). | [optional] 
**volume_container_count** | **int** | The total number of volume containers on the device. | [optional] 

## Example

```python
from openapi_client.models.device_details import DeviceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceDetails from a JSON string
device_details_instance = DeviceDetails.from_json(json)
# print the JSON string representation of the object
print(DeviceDetails.to_json())

# convert the object into a dict
device_details_dict = device_details_instance.to_dict()
# create an instance of DeviceDetails from a dict
device_details_from_dict = DeviceDetails.from_dict(device_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


