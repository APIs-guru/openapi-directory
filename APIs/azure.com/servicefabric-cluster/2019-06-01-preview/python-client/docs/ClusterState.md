# ClusterState

The current state of the cluster.    - WaitingForNodes - Indicates that the cluster resource is created and the resource provider is waiting for Service Fabric VM extension to boot up and report to it.   - Deploying - Indicates that the Service Fabric runtime is being installed on the VMs. Cluster resource will be in this state until the cluster boots up and system services are up.   - BaselineUpgrade - Indicates that the cluster is upgrading to establishes the cluster version. This upgrade is automatically initiated when the cluster boots up for the first time.   - UpdatingUserConfiguration - Indicates that the cluster is being upgraded with the user provided configuration.   - UpdatingUserCertificate - Indicates that the cluster is being upgraded with the user provided certificate.   - UpdatingInfrastructure - Indicates that the cluster is being upgraded with the latest Service Fabric runtime version. This happens only when the **upgradeMode** is set to 'Automatic'.   - EnforcingClusterVersion - Indicates that cluster is on a different version than expected and the cluster is being upgraded to the expected version.   - UpgradeServiceUnreachable - Indicates that the system service in the cluster is no longer polling the Resource Provider. Clusters in this state cannot be managed by the Resource Provider.   - AutoScale - Indicates that the ReliabilityLevel of the cluster is being adjusted.   - Ready - Indicates that the cluster is in a stable state. 

## Enum

* `WAITINGFORNODES` (value: `'WaitingForNodes'`)

* `DEPLOYING` (value: `'Deploying'`)

* `BASELINEUPGRADE` (value: `'BaselineUpgrade'`)

* `UPDATINGUSERCONFIGURATION` (value: `'UpdatingUserConfiguration'`)

* `UPDATINGUSERCERTIFICATE` (value: `'UpdatingUserCertificate'`)

* `UPDATINGINFRASTRUCTURE` (value: `'UpdatingInfrastructure'`)

* `ENFORCINGCLUSTERVERSION` (value: `'EnforcingClusterVersion'`)

* `UPGRADESERVICEUNREACHABLE` (value: `'UpgradeServiceUnreachable'`)

* `AUTOSCALE` (value: `'AutoScale'`)

* `READY` (value: `'Ready'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


