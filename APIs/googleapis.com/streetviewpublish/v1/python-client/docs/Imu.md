# Imu

IMU data from the device sensors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accel_mpsps** | [**List[Measurement3d]**](Measurement3d.md) | The accelerometer measurements in meters/sec^2 with increasing timestamps from devices. | [optional] 
**gyro_rps** | [**List[Measurement3d]**](Measurement3d.md) | The gyroscope measurements in radians/sec with increasing timestamps from devices. | [optional] 
**mag_ut** | [**List[Measurement3d]**](Measurement3d.md) | The magnetometer measurements of the magnetic field in microtesla (uT) with increasing timestamps from devices. | [optional] 

## Example

```python
from openapi_client.models.imu import Imu

# TODO update the JSON string below
json = "{}"
# create an instance of Imu from a JSON string
imu_instance = Imu.from_json(json)
# print the JSON string representation of the object
print(Imu.to_json())

# convert the object into a dict
imu_dict = imu_instance.to_dict()
# create an instance of Imu from a dict
imu_from_dict = Imu.from_dict(imu_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


