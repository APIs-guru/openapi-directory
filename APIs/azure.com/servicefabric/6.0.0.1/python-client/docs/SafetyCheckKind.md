# SafetyCheckKind

The kind of safety check performed by service fabric before continuing with the operations. These checks ensure the availability of the service and the reliability of the state. Following are the kinds of safety checks.  - Invalid - Indicates that the upgrade safety check kind is invalid. All Service Fabric enumerations have the invalid type. The value is zero. - EnsureSeedNodeQuorum - Indicates that if we bring down the node then this will result in global seed node quorum loss. The value is 1. - EnsurePartitionQuorum - Indicates that there is some partition for which if we bring down the replica on the node, it will result in quorum loss for that partition. The value is 2. - WaitForPrimaryPlacement - Indicates that there is some replica on the node that was moved out of this node due to upgrade. Service Fabric is now waiting for the primary to be moved back to this node. The value is 3. - WaitForPrimarySwap - Indicates that Service Fabric is waiting for a primary replica to be moved out of the node before starting upgrade on that node. The value is 4. - WaitForReconfiguration - Indicates that there is some replica on the node that is involved in a reconfiguration. Service Fabric is waiting for the reconfiguration to be complete before staring upgrade on that node. The value is 5. - WaitForInbuildReplica - Indicates that there is either a replica on the node that is going through copy, or there is a primary replica on the node that is copying data to some other replica. In both cases, bringing down the replica on the node due to upgrade will abort the copy. The value is 6. - EnsureAvailability - Indicates that there is either a stateless service partition on the node having exactly one instance, or there is a primary replica on the node for which the partition is quorum loss. In both cases, bringing down the replicas due to upgrade will result in loss of availability. The value is 7. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `ENSURESEEDNODEQUORUM` (value: `'EnsureSeedNodeQuorum'`)

* `ENSUREPARTITIONQUORUM` (value: `'EnsurePartitionQuorum'`)

* `WAITFORPRIMARYPLACEMENT` (value: `'WaitForPrimaryPlacement'`)

* `WAITFORPRIMARYSWAP` (value: `'WaitForPrimarySwap'`)

* `WAITFORRECONFIGURATION` (value: `'WaitForReconfiguration'`)

* `WAITFORINBUILDREPLICA` (value: `'WaitForInbuildReplica'`)

* `ENSUREAVAILABILITY` (value: `'EnsureAvailability'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


