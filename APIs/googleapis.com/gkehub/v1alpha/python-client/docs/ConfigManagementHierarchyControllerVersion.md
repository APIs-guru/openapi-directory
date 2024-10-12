# ConfigManagementHierarchyControllerVersion

Version for Hierarchy Controller

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extension** | **str** | Version for Hierarchy Controller extension | [optional] 
**hnc** | **str** | Version for open source HNC | [optional] 

## Example

```python
from openapi_client.models.config_management_hierarchy_controller_version import ConfigManagementHierarchyControllerVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementHierarchyControllerVersion from a JSON string
config_management_hierarchy_controller_version_instance = ConfigManagementHierarchyControllerVersion.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementHierarchyControllerVersion.to_json())

# convert the object into a dict
config_management_hierarchy_controller_version_dict = config_management_hierarchy_controller_version_instance.to_dict()
# create an instance of ConfigManagementHierarchyControllerVersion from a dict
config_management_hierarchy_controller_version_from_dict = ConfigManagementHierarchyControllerVersion.from_dict(config_management_hierarchy_controller_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


