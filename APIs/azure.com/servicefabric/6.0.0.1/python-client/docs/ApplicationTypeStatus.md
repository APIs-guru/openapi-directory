# ApplicationTypeStatus

The status of the application type. Possible values are following.    - Invalid - Indicates the application type status is invalid. All Service Fabric enumerations have the invalid type. The value is zero.   - Provisioning - Indicates that the application type is being provisioned in the cluster. The value is 1.   - Available - Indicates that the application type is fully provisioned and is available for use. An application of this type and version can be created. The value is 2.   - Unprovisioning - Indicates that the application type is in process of being unprovisioned from the cluster. The value is 3.   - Failed - Indicates that the application type provisioning failed and it is unavailable for use. The failure details can be obtained from the application type information query. The failed application type information remains in the cluster until it is unprovisioned or reprovisioned successfully. The value is 4. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `PROVISIONING` (value: `'Provisioning'`)

* `AVAILABLE` (value: `'Available'`)

* `UNPROVISIONING` (value: `'Unprovisioning'`)

* `FAILED` (value: `'Failed'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


