# ClusterGetProperties

The properties of cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_definition** | [**ClusterDefinition**](ClusterDefinition.md) |  | 
**cluster_state** | **str** | The state of the cluster. | [optional] 
**cluster_version** | **str** | The version of the cluster. | [optional] 
**compute_profile** | [**ComputeProfile**](ComputeProfile.md) |  | [optional] 
**connectivity_endpoints** | [**List[ConnectivityEndpoint]**](ConnectivityEndpoint.md) | The list of connectivity endpoints. | [optional] 
**created_date** | **str** | The date on which the cluster was created. | [optional] 
**disk_encryption_properties** | [**DiskEncryptionProperties**](DiskEncryptionProperties.md) |  | [optional] 
**errors** | [**List[Errors]**](Errors.md) | The list of errors. | [optional] 
**kafka_rest_properties** | [**KafkaRestProperties**](KafkaRestProperties.md) |  | [optional] 
**os_type** | **str** | The type of operating system. | [optional] 
**provisioning_state** | **str** | The provisioning state, which only appears in the response. | [optional] 
**quota_info** | [**QuotaInfo**](QuotaInfo.md) |  | [optional] 
**security_profile** | [**SecurityProfile**](SecurityProfile.md) |  | [optional] 
**tier** | **str** | The cluster tier. | [optional] 

## Example

```python
from openapi_client.models.cluster_get_properties import ClusterGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterGetProperties from a JSON string
cluster_get_properties_instance = ClusterGetProperties.from_json(json)
# print the JSON string representation of the object
print(ClusterGetProperties.to_json())

# convert the object into a dict
cluster_get_properties_dict = cluster_get_properties_instance.to_dict()
# create an instance of ClusterGetProperties from a dict
cluster_get_properties_from_dict = ClusterGetProperties.from_dict(cluster_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


