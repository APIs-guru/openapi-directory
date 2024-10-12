# HeadPose

Properties indicating head pose of the face.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pitch** | **float** |  | [optional] 
**roll** | **float** |  | [optional] 
**yaw** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.head_pose import HeadPose

# TODO update the JSON string below
json = "{}"
# create an instance of HeadPose from a JSON string
head_pose_instance = HeadPose.from_json(json)
# print the JSON string representation of the object
print(HeadPose.to_json())

# convert the object into a dict
head_pose_dict = head_pose_instance.to_dict()
# create an instance of HeadPose from a dict
head_pose_from_dict = HeadPose.from_dict(head_pose_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


