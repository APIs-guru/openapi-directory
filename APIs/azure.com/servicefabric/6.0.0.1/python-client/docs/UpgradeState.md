# UpgradeState

The state of the upgrade domain.      - Invalid - Indicates the upgrade state is invalid. All Service Fabric enumerations have the invalid type. The value is zero.     - RollingBackInProgress - The upgrade is rolling back to the previous version but is not complete yet. The value is 1     - RollingBackCompleted - The upgrade has finished rolling back. The value is 2     - RollingForwardPending - The current upgrade domain has finished upgrading. The overall upgrade is waiting for an explicit move next request in UnmonitoredManual mode or performing health checks in Monitored mode. The value is 3     - RollingForwardInProgress - The upgrade is rolling forward to the target version but is not complete yet. The value is 4     - RollingForwardCompleted - The upgrade has finished rolling forward. The value is 5     - Failed - The upgrade has failed and is unable to execute FailureAction. The value is 6 

## Enum

* `INVALID` (value: `'Invalid'`)

* `ROLLINGBACKINPROGRESS` (value: `'RollingBackInProgress'`)

* `ROLLINGBACKCOMPLETED` (value: `'RollingBackCompleted'`)

* `ROLLINGFORWARDPENDING` (value: `'RollingForwardPending'`)

* `ROLLINGFORWARDINPROGRESS` (value: `'RollingForwardInProgress'`)

* `ROLLINGFORWARDCOMPLETED` (value: `'RollingForwardCompleted'`)

* `FAILED` (value: `'Failed'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


