# Pose

Raw pose measurement for an entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accuracy_meters** | **float** | The estimated horizontal accuracy of this pose in meters with 68% confidence (one standard deviation). For example, on Android, this value is available from this method: https://developer.android.com/reference/android/location/Location#getAccuracy(). Other platforms have different methods of obtaining similar accuracy estimations. | [optional] 
**altitude** | **float** | Altitude of the pose in meters above WGS84 ellipsoid. NaN indicates an unmeasured quantity. | [optional] 
**gps_record_timestamp_unix_epoch** | **str** | Time of the GPS record since UTC epoch. | [optional] 
**heading** | **float** | The following pose parameters pertain to the center of the photo. They match https://developers.google.com/streetview/spherical-metadata. Compass heading, measured at the center of the photo in degrees clockwise from North. Value must be &gt;&#x3D;0 and &lt;360. NaN indicates an unmeasured quantity. | [optional] 
**lat_lng_pair** | [**LatLng**](LatLng.md) |  | [optional] 
**level** | [**Level**](Level.md) |  | [optional] 
**pitch** | **float** | Pitch, measured at the center of the photo in degrees. Value must be &gt;&#x3D;-90 and &lt;&#x3D; 90. A value of -90 means looking directly down, and a value of 90 means looking directly up. NaN indicates an unmeasured quantity. | [optional] 
**roll** | **float** | Roll, measured in degrees. Value must be &gt;&#x3D; 0 and &lt;360. A value of 0 means level with the horizon. NaN indicates an unmeasured quantity. | [optional] 

## Example

```python
from openapi_client.models.pose import Pose

# TODO update the JSON string below
json = "{}"
# create an instance of Pose from a JSON string
pose_instance = Pose.from_json(json)
# print the JSON string representation of the object
print(Pose.to_json())

# convert the object into a dict
pose_dict = pose_instance.to_dict()
# create an instance of Pose from a dict
pose_from_dict = Pose.from_dict(pose_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


