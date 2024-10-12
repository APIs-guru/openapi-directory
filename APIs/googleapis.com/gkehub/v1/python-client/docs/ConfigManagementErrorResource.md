# ConfigManagementErrorResource

Model for a config file in the git repo with an associated Sync error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_gvk** | [**ConfigManagementGroupVersionKind**](ConfigManagementGroupVersionKind.md) |  | [optional] 
**resource_name** | **str** | Metadata name of the resource that is causing an error | [optional] 
**resource_namespace** | **str** | Namespace of the resource that is causing an error | [optional] 
**source_path** | **str** | Path in the git repo of the erroneous config | [optional] 

## Example

```python
from openapi_client.models.config_management_error_resource import ConfigManagementErrorResource

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementErrorResource from a JSON string
config_management_error_resource_instance = ConfigManagementErrorResource.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementErrorResource.to_json())

# convert the object into a dict
config_management_error_resource_dict = config_management_error_resource_instance.to_dict()
# create an instance of ConfigManagementErrorResource from a dict
config_management_error_resource_from_dict = ConfigManagementErrorResource.from_dict(config_management_error_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


