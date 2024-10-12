# ReplicatorOperationName

Specifies the operation currently being executed by the Replicator. Possible values are following.   - Invalid - Default value if the replicator is not yet ready.   - None - Replicator is not running any operation from Service Fabric perspective.   - Open - Replicator is opening.   - ChangeRole - Replicator is in the process of changing its role.   - UpdateEpoch - Due to a change in the replica set, replicator is being updated with its Epoch.   - Close - Replicator is closing.   - Abort - Replicator is being aborted.   - OnDataLoss - Replicator is handling the data loss condition, where the user service may potentially be recovering state from an external source.   - WaitForCatchup - Replicator is waiting for a quorum of replicas to be caught up to the latest state.   - Build - Replicator is in the process of building one or more replicas. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `NONE` (value: `'None'`)

* `OPEN` (value: `'Open'`)

* `CHANGEROLE` (value: `'ChangeRole'`)

* `UPDATEEPOCH` (value: `'UpdateEpoch'`)

* `CLOSE` (value: `'Close'`)

* `ABORT` (value: `'Abort'`)

* `ONDATALOSS` (value: `'OnDataLoss'`)

* `WAITFORCATCHUP` (value: `'WaitForCatchup'`)

* `BUILD` (value: `'Build'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


