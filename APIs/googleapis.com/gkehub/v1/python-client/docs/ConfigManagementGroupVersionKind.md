# ConfigManagementGroupVersionKind

A Kubernetes object's GVK

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | **str** | Kubernetes Group | [optional] 
**kind** | **str** | Kubernetes Kind | [optional] 
**version** | **str** | Kubernetes Version | [optional] 

## Example

```python
from openapi_client.models.config_management_group_version_kind import ConfigManagementGroupVersionKind

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementGroupVersionKind from a JSON string
config_management_group_version_kind_instance = ConfigManagementGroupVersionKind.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementGroupVersionKind.to_json())

# convert the object into a dict
config_management_group_version_kind_dict = config_management_group_version_kind_instance.to_dict()
# create an instance of ConfigManagementGroupVersionKind from a dict
config_management_group_version_kind_from_dict = ConfigManagementGroupVersionKind.from_dict(config_management_group_version_kind_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


