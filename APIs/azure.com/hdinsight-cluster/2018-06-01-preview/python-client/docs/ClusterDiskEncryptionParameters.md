# ClusterDiskEncryptionParameters

The Disk Encryption Cluster request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | Key name that is used for enabling disk encryption. | [optional] 
**key_version** | **str** | Specific key version that is used for enabling disk encryption. | [optional] 
**vault_uri** | **str** | Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net | [optional] 

## Example

```python
from openapi_client.models.cluster_disk_encryption_parameters import ClusterDiskEncryptionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterDiskEncryptionParameters from a JSON string
cluster_disk_encryption_parameters_instance = ClusterDiskEncryptionParameters.from_json(json)
# print the JSON string representation of the object
print(ClusterDiskEncryptionParameters.to_json())

# convert the object into a dict
cluster_disk_encryption_parameters_dict = cluster_disk_encryption_parameters_instance.to_dict()
# create an instance of ClusterDiskEncryptionParameters from a dict
cluster_disk_encryption_parameters_from_dict = ClusterDiskEncryptionParameters.from_dict(cluster_disk_encryption_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


