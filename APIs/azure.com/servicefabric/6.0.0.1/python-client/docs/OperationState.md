# OperationState

- Invalid - The operation state is invalid. - Running - The operation is in progress. - RollingBack -  The operation is rolling back internal system state because it encountered a fatal error or was cancelled by the user.  \"RollingBack\"    does not refer to user state.  For example, if CancelOperation is called on a command of type PartitionDataLoss,    a state of \"RollingBack\" does not mean service data is being restored (assuming the command has progressed far enough to cause data loss).    It means the system is rolling back/cleaning up internal system state associated with the command. - Completed - The operation has completed successfully and is no longer running. - Faulted - The operation has failed and is no longer running. - Cancelled - The operation was cancelled by the user using CancelOperation, and is no longer running. - ForceCancelled - The operation was cancelled by the user using CancelOperation, with the force parameter set to true.  It is no longer running.  Refer to CancelOperation for more details. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `RUNNING` (value: `'Running'`)

* `ROLLINGBACK` (value: `'RollingBack'`)

* `COMPLETED` (value: `'Completed'`)

* `FAULTED` (value: `'Faulted'`)

* `CANCELLED` (value: `'Cancelled'`)

* `FORCECANCELLED` (value: `'ForceCancelled'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


