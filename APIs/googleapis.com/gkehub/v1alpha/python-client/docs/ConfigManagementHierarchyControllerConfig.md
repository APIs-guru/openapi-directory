# ConfigManagementHierarchyControllerConfig

Configuration for Hierarchy Controller

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_hierarchical_resource_quota** | **bool** | Whether hierarchical resource quota is enabled in this cluster. | [optional] 
**enable_pod_tree_labels** | **bool** | Whether pod tree labels are enabled in this cluster. | [optional] 
**enabled** | **bool** | Whether Hierarchy Controller is enabled in this cluster. | [optional] 

## Example

```python
from openapi_client.models.config_management_hierarchy_controller_config import ConfigManagementHierarchyControllerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementHierarchyControllerConfig from a JSON string
config_management_hierarchy_controller_config_instance = ConfigManagementHierarchyControllerConfig.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementHierarchyControllerConfig.to_json())

# convert the object into a dict
config_management_hierarchy_controller_config_dict = config_management_hierarchy_controller_config_instance.to_dict()
# create an instance of ConfigManagementHierarchyControllerConfig from a dict
config_management_hierarchy_controller_config_from_dict = ConfigManagementHierarchyControllerConfig.from_dict(config_management_hierarchy_controller_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


