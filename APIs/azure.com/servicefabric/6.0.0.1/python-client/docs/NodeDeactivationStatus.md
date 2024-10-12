# NodeDeactivationStatus

The status of node deactivation operation. Following are the possible values.    - None - No status is associated with the task. The value is zero.   - SafetyCheckInProgress - When a node is deactivated Service Fabric performs checks to ensure that the operation is safe to proceed to ensure avaiablity of the service and reliability of the state. This value indicates that one or more safety checks are in progress. The value is 1.   - SafetyCheckComplete - When a node is deactivated Service Fabric performs checks to ensure that the operation is safe to proceed to ensure avaiablity of the service and reliability of the state. This value indicates that all safety checks have been completed. The value is 2.   - Completed - The task is completed. The value is 3. 

## Enum

* `NONE` (value: `'None'`)

* `SAFETYCHECKINPROGRESS` (value: `'SafetyCheckInProgress'`)

* `SAFETYCHECKCOMPLETE` (value: `'SafetyCheckComplete'`)

* `COMPLETED` (value: `'Completed'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


