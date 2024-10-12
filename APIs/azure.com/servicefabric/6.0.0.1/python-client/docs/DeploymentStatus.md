# DeploymentStatus

Specifies the status of a deployed application or service package on a Service Fabric node. Possible values are following.    - Invalid - Indicates status of the application or service package is not known or invalid. The value is 0.   - Downloading - Indicates the application or service package is being downloaded to the node from the ImageStore. The value is 1.   - Activating - Indicates the application or service package is being activated. The value is 2.   - Active - Indicates the application or service package is active the node. The value is 3.   - Upgrading - Indicates the application or service package is being upgraded. The value is 4.   - Deactivating - Indicates the application or service package is being deactivated. The value is 5. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `DOWNLOADING` (value: `'Downloading'`)

* `ACTIVATING` (value: `'Activating'`)

* `ACTIVE` (value: `'Active'`)

* `UPGRADING` (value: `'Upgrading'`)

* `DEACTIVATING` (value: `'Deactivating'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


