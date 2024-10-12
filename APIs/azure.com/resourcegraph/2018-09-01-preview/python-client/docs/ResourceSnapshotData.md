# ResourceSnapshotData

Data on a specific resource snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **object** | The resource snapshot content (in resourceChangeDetails response only). | [optional] 
**timestamp** | **datetime** | The time when the snapshot was created. The snapshot timestamp provides an approximation as to when a modification to a resource was detected.  There can be a difference between the actual modification time and the detection time.  This is due to differences in how operations that modify a resource are processed, versus how operation that record resource snapshots are processed. | 

## Example

```python
from openapi_client.models.resource_snapshot_data import ResourceSnapshotData

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSnapshotData from a JSON string
resource_snapshot_data_instance = ResourceSnapshotData.from_json(json)
# print the JSON string representation of the object
print(ResourceSnapshotData.to_json())

# convert the object into a dict
resource_snapshot_data_dict = resource_snapshot_data_instance.to_dict()
# create an instance of ResourceSnapshotData from a dict
resource_snapshot_data_from_dict = ResourceSnapshotData.from_dict(resource_snapshot_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


