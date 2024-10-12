# SnapshotSku

The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The sku name. | [optional] 
**tier** | **str** | The sku tier. | [optional] [readonly] 

## Example

```python
from openapi_client.models.snapshot_sku import SnapshotSku

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotSku from a JSON string
snapshot_sku_instance = SnapshotSku.from_json(json)
# print the JSON string representation of the object
print(SnapshotSku.to_json())

# convert the object into a dict
snapshot_sku_dict = snapshot_sku_instance.to_dict()
# create an instance of SnapshotSku from a dict
snapshot_sku_from_dict = SnapshotSku.from_dict(snapshot_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


