# BackupEpoch

An Epoch is a configuration number for the partition as a whole. When the configuration of the replica set changes, for example when the Primary replica changes, the operations that are replicated from the new Primary replica are said to be a new Epoch from the ones which were sent by the old Primary replica.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_number** | **str** | The current configuration number of this Epoch. The configuration number is an increasing value that is updated whenever the configuration of this replica set changes. | [optional] 
**data_loss_number** | **str** | The current data loss number of this Epoch. The data loss number property is an increasing value which is updated whenever data loss is suspected, as when loss of a quorum of replicas in the replica set that includes the Primary replica. | [optional] 

## Example

```python
from openapi_client.models.backup_epoch import BackupEpoch

# TODO update the JSON string below
json = "{}"
# create an instance of BackupEpoch from a JSON string
backup_epoch_instance = BackupEpoch.from_json(json)
# print the JSON string representation of the object
print(BackupEpoch.to_json())

# convert the object into a dict
backup_epoch_dict = backup_epoch_instance.to_dict()
# create an instance of BackupEpoch from a dict
backup_epoch_from_dict = BackupEpoch.from_dict(backup_epoch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


