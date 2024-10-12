# Measurement3d

A Generic 3d measurement sample.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capture_time** | **str** | The timestamp of the IMU measurement. | [optional] 
**x** | **float** | The sensor measurement in the x axis. | [optional] 
**y** | **float** | The sensor measurement in the y axis. | [optional] 
**z** | **float** | The sensor measurement in the z axis. | [optional] 

## Example

```python
from openapi_client.models.measurement3d import Measurement3d

# TODO update the JSON string below
json = "{}"
# create an instance of Measurement3d from a JSON string
measurement3d_instance = Measurement3d.from_json(json)
# print the JSON string representation of the object
print(Measurement3d.to_json())

# convert the object into a dict
measurement3d_dict = measurement3d_instance.to_dict()
# create an instance of Measurement3d from a dict
measurement3d_from_dict = Measurement3d.from_dict(measurement3d_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


