# ReplicaStatus

The status of a replica of a service. Possible values are following.    -Invalid - Indicates the replica status is invalid. All Service Fabric enumerations have the invalid type. The value is zero.   -InBuild - The replica is being built. This means that a primary replica is seeding this replica. The value is 1.   -Standby - The replica is in standby. The value is 2.   -Ready - The replica is ready. The value is 3.   -Down - The replica is down. The value is 4.   -Dropped - Replica is dropped. This means that the replica has been removed from the replica set. If it is persisted, its state has been deleted. The value is 5. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `INBUILD` (value: `'InBuild'`)

* `STANDBY` (value: `'Standby'`)

* `READY` (value: `'Ready'`)

* `DOWN` (value: `'Down'`)

* `DROPPED` (value: `'Dropped'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


