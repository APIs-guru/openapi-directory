# ClusterCreateProperties

The cluster create parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_definition** | [**ClusterDefinition**](ClusterDefinition.md) |  | [optional] 
**cluster_version** | **str** | The version of the cluster. | [optional] 
**compute_profile** | [**ComputeProfile**](ComputeProfile.md) |  | [optional] 
**disk_encryption_properties** | [**DiskEncryptionProperties**](DiskEncryptionProperties.md) |  | [optional] 
**kafka_rest_properties** | [**KafkaRestProperties**](KafkaRestProperties.md) |  | [optional] 
**os_type** | **str** | The type of operating system. | [optional] 
**security_profile** | [**SecurityProfile**](SecurityProfile.md) |  | [optional] 
**storage_profile** | [**StorageProfile**](StorageProfile.md) |  | [optional] 
**tier** | **str** | The cluster tier. | [optional] 

## Example

```python
from openapi_client.models.cluster_create_properties import ClusterCreateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterCreateProperties from a JSON string
cluster_create_properties_instance = ClusterCreateProperties.from_json(json)
# print the JSON string representation of the object
print(ClusterCreateProperties.to_json())

# convert the object into a dict
cluster_create_properties_dict = cluster_create_properties_instance.to_dict()
# create an instance of ClusterCreateProperties from a dict
cluster_create_properties_from_dict = ClusterCreateProperties.from_dict(cluster_create_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


