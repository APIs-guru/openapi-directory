# DeviceDimensions

Physical device dimensions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **object** |  | [optional] 
**height** | **object** |  | [optional] 
**width** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.device_dimensions import DeviceDimensions

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceDimensions from a JSON string
device_dimensions_instance = DeviceDimensions.from_json(json)
# print the JSON string representation of the object
print(DeviceDimensions.to_json())

# convert the object into a dict
device_dimensions_dict = device_dimensions_instance.to_dict()
# create an instance of DeviceDimensions from a dict
device_dimensions_from_dict = DeviceDimensions.from_dict(device_dimensions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


