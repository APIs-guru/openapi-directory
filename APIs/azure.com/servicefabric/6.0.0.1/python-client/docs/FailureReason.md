# FailureReason

The cause of an upgrade failure that resulted in FailureAction being executed.      - None - Indicates the reason is invalid or unknown. All Service Fabric enumerations have the invalid type. The value is zero.     - Interrupted - There was an external request to rollback the upgrade. The value is 1     - HealthCheck - The upgrade failed due to health policy violations. The value is 2     - UpgradeDomainTimeout - An upgrade domain took longer than the allowed upgrade domain timeout to process. The value is 3     - UpgradeTimeout - The overall upgrade took longer than the allowed upgrade timeout to process. The value is 4 

## Enum

* `NONE` (value: `'None'`)

* `INTERRUPTED` (value: `'Interrupted'`)

* `HEALTHCHECK` (value: `'HealthCheck'`)

* `UPGRADEDOMAINTIMEOUT` (value: `'UpgradeDomainTimeout'`)

* `UPGRADETIMEOUT` (value: `'UpgradeTimeout'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


