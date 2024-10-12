# SnapshotRecoverySource

Specifies the web app that snapshot contents will be retrieved from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ARM resource ID of the source app.  /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and  /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots. | [optional] 
**location** | **str** | Geographical location of the source web app, e.g. SouthEastAsia, SouthCentralUS | [optional] 

## Example

```python
from openapi_client.models.snapshot_recovery_source import SnapshotRecoverySource

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotRecoverySource from a JSON string
snapshot_recovery_source_instance = SnapshotRecoverySource.from_json(json)
# print the JSON string representation of the object
print(SnapshotRecoverySource.to_json())

# convert the object into a dict
snapshot_recovery_source_dict = snapshot_recovery_source_instance.to_dict()
# create an instance of SnapshotRecoverySource from a dict
snapshot_recovery_source_from_dict = SnapshotRecoverySource.from_dict(snapshot_recovery_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


