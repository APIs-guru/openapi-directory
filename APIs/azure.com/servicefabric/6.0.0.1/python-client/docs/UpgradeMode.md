# UpgradeMode

The mode used to monitor health during a rolling upgrade.      - Invalid - Indicates the upgrade mode is invalid. All Service Fabric enumerations have the invalid type. The value is zero.     - UnmonitoredAuto - The upgrade will proceed automatically without performing any health monitoring. The value is 1     - UnmonitoredManual - The upgrade will stop after completing each upgrade domain, giving the opportunity to manually monitor health before proceeding. The value is 2     - Monitored - The upgrade will stop after completing each upgrade domain and automatically monitor health before proceeding. The value is 3 

## Enum

* `INVALID` (value: `'Invalid'`)

* `UNMONITOREDAUTO` (value: `'UnmonitoredAuto'`)

* `UNMONITOREDMANUAL` (value: `'UnmonitoredManual'`)

* `MONITORED` (value: `'Monitored'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


