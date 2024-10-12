# GenerateNetworkCameraSnapshotRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fullframe** | **bool** | [optional] If set to \&quot;true\&quot; the snapshot will be taken at full sensor resolution. This will error if used with timestamp. | [optional] 
**timestamp** | **datetime** | [optional] The snapshot will be taken from this time on the camera. The timestamp is expected to be in ISO 8601 format. If no timestamp is specified, we will assume current time. | [optional] 

## Example

```python
from openapi_client.models.generate_network_camera_snapshot_request import GenerateNetworkCameraSnapshotRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateNetworkCameraSnapshotRequest from a JSON string
generate_network_camera_snapshot_request_instance = GenerateNetworkCameraSnapshotRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateNetworkCameraSnapshotRequest.to_json())

# convert the object into a dict
generate_network_camera_snapshot_request_dict = generate_network_camera_snapshot_request_instance.to_dict()
# create an instance of GenerateNetworkCameraSnapshotRequest from a dict
generate_network_camera_snapshot_request_from_dict = GenerateNetworkCameraSnapshotRequest.from_dict(generate_network_camera_snapshot_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


