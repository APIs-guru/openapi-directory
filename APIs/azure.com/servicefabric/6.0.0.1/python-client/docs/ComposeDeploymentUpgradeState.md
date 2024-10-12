# ComposeDeploymentUpgradeState

The state of the compose deployment upgrade.      - Invalid - Indicates the upgrade state is invalid. All Service Fabric enumerations have the invalid type. The value is zero.     - ProvisioningTarget - The upgrade is in the progress of provisioning target application type version. The value is 1.     - RollingForwardInProgress - The upgrade is rolling forward to the target version but is not complete yet. The value is 2.     - RollingForwardPending - The current upgrade domain has finished upgrading. The overall upgrade is waiting for an explicit move next request in UnmonitoredManual mode or performing health checks in Monitored mode. The value is 3     - UnprovisioningCurrent - The upgrade is in the progress of unprovisioning current application type version and rolling forward to the target version is completed. The value is 4.     - RollingForwardCompleted - The upgrade has finished rolling forward. The value is 5.     - RollingBackInProgress - The upgrade is rolling back to the previous version but is not complete yet. The value is 6.     - UnprovisioningTarget - The upgrade is in the progress of unprovisioning target application type version and rolling back to the current version is completed. The value is 7.     - RollingBackCompleted - The upgrade has finished rolling back. The valud is 8.     - Failed - The upgrade has failed and is unable to execute FailureAction. The value is 9. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `PROVISIONINGTARGET` (value: `'ProvisioningTarget'`)

* `ROLLINGFORWARDINPROGRESS` (value: `'RollingForwardInProgress'`)

* `ROLLINGFORWARDPENDING` (value: `'RollingForwardPending'`)

* `UNPROVISIONINGCURRENT` (value: `'UnprovisioningCurrent'`)

* `ROLLINGFORWARDCOMPLETED` (value: `'RollingForwardCompleted'`)

* `ROLLINGBACKINPROGRESS` (value: `'RollingBackInProgress'`)

* `UNPROVISIONINGTARGET` (value: `'UnprovisioningTarget'`)

* `ROLLINGBACKCOMPLETED` (value: `'RollingBackCompleted'`)

* `FAILED` (value: `'Failed'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


