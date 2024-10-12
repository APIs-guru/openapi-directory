# PartitionAccessStatus

Specifies the access status of the partition. Possible values are following.   - Invalid - Indicates that the read or write operation access status is not valid. This value is not returned to the caller.   - Granted - Indicates that the read or write operation access is granted and the operation is allowed.   - ReconfigurationPending - Indicates that the client should try again later, because a reconfiguration is in progress.   - NotPrimary - Indicates that this client request was received by a replica that is not a Primary replica.   - NoWriteQuorum - Indicates that no write quorum is available and, therefore, no write operation can be accepted. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `GRANTED` (value: `'Granted'`)

* `RECONFIGURATIONPENDING` (value: `'ReconfigurationPending'`)

* `NOTPRIMARY` (value: `'NotPrimary'`)

* `NOWRITEQUORUM` (value: `'NoWriteQuorum'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


