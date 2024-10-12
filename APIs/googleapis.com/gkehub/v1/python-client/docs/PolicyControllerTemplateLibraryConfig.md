# PolicyControllerTemplateLibraryConfig

The config specifying which default library templates to install.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installation** | **str** | Configures the manner in which the template library is installed on the cluster. | [optional] 

## Example

```python
from openapi_client.models.policy_controller_template_library_config import PolicyControllerTemplateLibraryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyControllerTemplateLibraryConfig from a JSON string
policy_controller_template_library_config_instance = PolicyControllerTemplateLibraryConfig.from_json(json)
# print the JSON string representation of the object
print(PolicyControllerTemplateLibraryConfig.to_json())

# convert the object into a dict
policy_controller_template_library_config_dict = policy_controller_template_library_config_instance.to_dict()
# create an instance of PolicyControllerTemplateLibraryConfig from a dict
policy_controller_template_library_config_from_dict = PolicyControllerTemplateLibraryConfig.from_dict(policy_controller_template_library_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


