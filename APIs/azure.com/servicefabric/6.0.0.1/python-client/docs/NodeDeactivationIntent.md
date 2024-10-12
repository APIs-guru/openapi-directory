# NodeDeactivationIntent

The intent or the reason for deactivating the node. Following are the possible values for it.    - Invalid - Indicates the node deactivation intent is invalid. All Service Fabric enumerations have the invalid type. The value is zero. This value is not used.   - Pause - Indicates that the node should be paused. The value is 1.   - Restart - Indicates that the intent is for the node to be restarted after a short period of time. Service Fabric does not restart the node, this action is done outside of Service Fabric. The value is 2.   - RemoveData - Indicates that the intent is to reimage the node. Service Fabric does not reimage the node, this action is done outside of Service Fabric. The value is 3.   - RemoveNode - Indicates that the node is being decommissioned and is not expected to return. Service Fabric does not decommission the node, this action is done outside of Service Fabric. The value is 4. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `PAUSE` (value: `'Pause'`)

* `RESTART` (value: `'Restart'`)

* `REMOVEDATA` (value: `'RemoveData'`)

* `REMOVENODE` (value: `'RemoveNode'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


