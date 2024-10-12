# SnapshotCollectionValueInnerProperties

Snapshot resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **str** | The time the snapshot was taken. | [optional] [readonly] 

## Example

```python
from openapi_client.models.snapshot_collection_value_inner_properties import SnapshotCollectionValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotCollectionValueInnerProperties from a JSON string
snapshot_collection_value_inner_properties_instance = SnapshotCollectionValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(SnapshotCollectionValueInnerProperties.to_json())

# convert the object into a dict
snapshot_collection_value_inner_properties_dict = snapshot_collection_value_inner_properties_instance.to_dict()
# create an instance of SnapshotCollectionValueInnerProperties from a dict
snapshot_collection_value_inner_properties_from_dict = SnapshotCollectionValueInnerProperties.from_dict(snapshot_collection_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


