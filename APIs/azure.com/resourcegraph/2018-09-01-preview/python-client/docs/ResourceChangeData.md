# ResourceChangeData

Data on a specific change, represented by a pair of before and after resource snapshots.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after_snapshot** | [**ResourceSnapshotData**](ResourceSnapshotData.md) | The snapshot after the change. | 
**before_snapshot** | [**ResourceSnapshotData**](ResourceSnapshotData.md) | The snapshot before the change. | 
**change_id** | **str** | The change ID. Valid and unique within the specified resource only. | 

## Example

```python
from openapi_client.models.resource_change_data import ResourceChangeData

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceChangeData from a JSON string
resource_change_data_instance = ResourceChangeData.from_json(json)
# print the JSON string representation of the object
print(ResourceChangeData.to_json())

# convert the object into a dict
resource_change_data_dict = resource_change_data_instance.to_dict()
# create an instance of ResourceChangeData from a dict
resource_change_data_from_dict = ResourceChangeData.from_dict(resource_change_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


