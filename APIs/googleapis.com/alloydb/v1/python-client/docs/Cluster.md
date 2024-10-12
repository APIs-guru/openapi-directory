# Cluster

A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128 | [optional] 
**automated_backup_policy** | [**AutomatedBackupPolicy**](AutomatedBackupPolicy.md) |  | [optional] 
**backup_source** | [**BackupSource**](BackupSource.md) |  | [optional] 
**cluster_type** | **str** | Output only. The type of the cluster. This is an output-only field and it&#39;s populated at the Cluster creation time or the Cluster promotion time. The cluster type is determined by which RPC was used to create the cluster (i.e. &#x60;CreateCluster&#x60; vs. &#x60;CreateSecondaryCluster&#x60; | [optional] [readonly] 
**continuous_backup_config** | [**ContinuousBackupConfig**](ContinuousBackupConfig.md) |  | [optional] 
**continuous_backup_info** | [**ContinuousBackupInfo**](ContinuousBackupInfo.md) |  | [optional] 
**create_time** | **str** | Output only. Create time stamp | [optional] [readonly] 
**database_version** | **str** | Optional. The database engine major version. This is an optional field and it is populated at the Cluster creation time. If a database version is not supplied at cluster creation time, then a default database version will be used. | [optional] 
**delete_time** | **str** | Output only. Delete time stamp | [optional] [readonly] 
**display_name** | **str** | User-settable and human-readable display name for the Cluster. | [optional] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**encryption_info** | [**EncryptionInfo**](EncryptionInfo.md) |  | [optional] 
**etag** | **str** | For Resource freshness validation (https://google.aip.dev/154) | [optional] 
**initial_user** | [**UserPassword**](UserPassword.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels as key value pairs | [optional] 
**migration_source** | [**MigrationSource**](MigrationSource.md) |  | [optional] 
**name** | **str** | Output only. The name of the cluster resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id} where the cluster ID segment should satisfy the regex expression &#x60;[a-z0-9-]+&#x60;. For more details see https://google.aip.dev/122. The prefix of the cluster resource name is the name of the parent resource: * projects/{project}/locations/{region} | [optional] [readonly] 
**network** | **str** | Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: &#x60;projects/{project}/global/networks/{network_id}&#x60;. This is required to create a cluster. Deprecated, use network_config.network instead. | [optional] 
**network_config** | [**NetworkConfig**](NetworkConfig.md) |  | [optional] 
**primary_config** | [**PrimaryConfig**](PrimaryConfig.md) |  | [optional] 
**reconciling** | **bool** | Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of Cluster does not match the user&#39;s intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance. | [optional] [readonly] 
**satisfies_pzs** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**secondary_config** | [**SecondaryConfig**](SecondaryConfig.md) |  | [optional] 
**ssl_config** | [**SslConfig**](SslConfig.md) |  | [optional] 
**state** | **str** | Output only. The current serving state of the cluster. | [optional] [readonly] 
**uid** | **str** | Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted. | [optional] [readonly] 
**update_time** | **str** | Output only. Update time stamp | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster import Cluster

# TODO update the JSON string below
json = "{}"
# create an instance of Cluster from a JSON string
cluster_instance = Cluster.from_json(json)
# print the JSON string representation of the object
print(Cluster.to_json())

# convert the object into a dict
cluster_dict = cluster_instance.to_dict()
# create an instance of Cluster from a dict
cluster_from_dict = Cluster.from_dict(cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


