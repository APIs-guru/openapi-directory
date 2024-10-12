# ReplicaRole

The role of a replica of a stateful service. Possible values are following.   - Unknown - Indicates the initial role that a replica is created in. The value is zero.   - None - Specifies that the replica has no responsibility in regard to the replica set. The value is 1   - Primary - Refers to the replica in the set on which all read and write operations are complete in order to enforce strong consistency semantics. Read operations are handled directly by the Primary replica, while write operations must be acknowledged by a quorum of the replicas in the replica set. There can only be one Primary replica in a replica set at a time. The value is 2.   - IdleSecondary - Refers to a replica in the set that receives a state transfer from the Primary replica to prepare for becoming an active Secondary replica. There can be multiple Idle Secondary replicas in a replica set at a time. Idle Secondary replicas do not count as a part of a write quorum. The value is 3.   - ActiveSecondary - Refers to a replica in the set that receives state updates from the Primary replica, applies them, and sends acknowledgements back. Secondary replicas must participate in the write quorum for a replica set. There can be multiple active Secondary replicas in a replica set at a time. The number of active Secondary replicas is configurable that the reliability subsystem should maintain. The value is 4. 

## Enum

* `UNKNOWN` (value: `'Unknown'`)

* `NONE` (value: `'None'`)

* `PRIMARY` (value: `'Primary'`)

* `IDLESECONDARY` (value: `'IdleSecondary'`)

* `ACTIVESECONDARY` (value: `'ActiveSecondary'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


