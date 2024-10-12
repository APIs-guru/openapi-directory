# NodeDeactivationTaskType

The type of the task that performed the node deactivation. Following are the possible values.    - Invalid - Indicates the node deactivation task type is invalid. All Service Fabric enumerations have the invalid type. The value is zero. This value is not used.   - Infrastructure - Specifies the task created by Infrastructure hosting the nodes. The value is 1.   - Repair - Specifies the task that was created by the Repair Manager service. The value is 2.   - Client - Specifies that the task was created by using the public API. The value is 3. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `INFRASTRUCTURE` (value: `'Infrastructure'`)

* `REPAIR` (value: `'Repair'`)

* `CLIENT` (value: `'Client'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


