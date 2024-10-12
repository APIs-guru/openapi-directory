# BareMetalAdminClusterOperationsConfig

BareMetalAdminClusterOperationsConfig specifies the admin cluster's observability infrastructure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_application_logs** | **bool** | Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics). | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_cluster_operations_config import BareMetalAdminClusterOperationsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminClusterOperationsConfig from a JSON string
bare_metal_admin_cluster_operations_config_instance = BareMetalAdminClusterOperationsConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminClusterOperationsConfig.to_json())

# convert the object into a dict
bare_metal_admin_cluster_operations_config_dict = bare_metal_admin_cluster_operations_config_instance.to_dict()
# create an instance of BareMetalAdminClusterOperationsConfig from a dict
bare_metal_admin_cluster_operations_config_from_dict = BareMetalAdminClusterOperationsConfig.from_dict(bare_metal_admin_cluster_operations_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


