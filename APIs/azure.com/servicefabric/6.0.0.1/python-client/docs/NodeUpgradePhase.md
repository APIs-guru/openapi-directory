# NodeUpgradePhase

The state of the upgrading node.    - Invalid - Indicates the upgrade state is invalid. All Service Fabric enumerations have the invalid type. The value is zero.   - PreUpgradeSafetyCheck - The upgrade has not started yet due to pending safety checks. The value is 1   - Upgrading - The upgrade is in progress. The value is 2   - PostUpgradeSafetyCheck - The upgrade has completed and post upgrade safety checks are being performed. The value is 3 

## Enum

* `INVALID` (value: `'Invalid'`)

* `PREUPGRADESAFETYCHECK` (value: `'PreUpgradeSafetyCheck'`)

* `UPGRADING` (value: `'Upgrading'`)

* `POSTUPGRADESAFETYCHECK` (value: `'PostUpgradeSafetyCheck'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


