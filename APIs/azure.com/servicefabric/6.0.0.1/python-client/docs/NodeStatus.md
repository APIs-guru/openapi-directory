# NodeStatus

The status of the node. Possible values are following.    - Invalid - Indicates the node status is invalid. All Service Fabric enumerations have the invalid type. The value is zero.   - Up - Indicates the node is up. The value is 1.   - Down - Indicates the node is down. The value is 2.   - Enabling - Indicates the node is in process of being enabled. The value is 3.   - Disabling - Indicates the node is in the process of being disabled. The value is 4.   - Disabled - Indicates the node is disabled. The value is 5.   - Unknown - Indicates the node is unknown. A node would be in Unknown state if Service Fabric does not have authoritative information about that node. This can happen if the system learns about a node at runtime.The value is 6.   - Removed - Indicates the node is removed. A node would be in Removed state if NodeStateRemoved API has been called for this node. In other words, Service Fabric has been informed that the persisted state on the node has been permanently lost. The value is 7. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `UP` (value: `'Up'`)

* `DOWN` (value: `'Down'`)

* `ENABLING` (value: `'Enabling'`)

* `DISABLING` (value: `'Disabling'`)

* `DISABLED` (value: `'Disabled'`)

* `UNKNOWN` (value: `'Unknown'`)

* `REMOVED` (value: `'Removed'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


