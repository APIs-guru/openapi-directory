# PrivateClusterMasterGlobalAccessConfig

Configuration for controlling master global access settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whenever master is accessible globally or not. | [optional] 

## Example

```python
from openapi_client.models.private_cluster_master_global_access_config import PrivateClusterMasterGlobalAccessConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateClusterMasterGlobalAccessConfig from a JSON string
private_cluster_master_global_access_config_instance = PrivateClusterMasterGlobalAccessConfig.from_json(json)
# print the JSON string representation of the object
print(PrivateClusterMasterGlobalAccessConfig.to_json())

# convert the object into a dict
private_cluster_master_global_access_config_dict = private_cluster_master_global_access_config_instance.to_dict()
# create an instance of PrivateClusterMasterGlobalAccessConfig from a dict
private_cluster_master_global_access_config_from_dict = PrivateClusterMasterGlobalAccessConfig.from_dict(private_cluster_master_global_access_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


