# ContainerFeatures


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**support_built_in_variables** | **bool** | Whether this Container supports built-in variables | [optional] 
**support_clients** | **bool** | Whether this Container supports clients. | [optional] 
**support_environments** | **bool** | Whether this Container supports environments. | [optional] 
**support_folders** | **bool** | Whether this Container supports folders. | [optional] 
**support_gtag_configs** | **bool** | Whether this Container supports Google tag config. | [optional] 
**support_tags** | **bool** | Whether this Container supports tags. | [optional] 
**support_templates** | **bool** | Whether this Container supports templates. | [optional] 
**support_transformations** | **bool** | Whether this Container supports transformations. | [optional] 
**support_triggers** | **bool** | Whether this Container supports triggers. | [optional] 
**support_user_permissions** | **bool** | Whether this Container supports user permissions managed by GTM. | [optional] 
**support_variables** | **bool** | Whether this Container supports variables. | [optional] 
**support_versions** | **bool** | Whether this Container supports Container versions. | [optional] 
**support_workspaces** | **bool** | Whether this Container supports workspaces. | [optional] 
**support_zones** | **bool** | Whether this Container supports zones. | [optional] 

## Example

```python
from openapi_client.models.container_features import ContainerFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerFeatures from a JSON string
container_features_instance = ContainerFeatures.from_json(json)
# print the JSON string representation of the object
print(ContainerFeatures.to_json())

# convert the object into a dict
container_features_dict = container_features_instance.to_dict()
# create an instance of ContainerFeatures from a dict
container_features_from_dict = ContainerFeatures.from_dict(container_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


