# DefinitionTemplates

Holds UI definition file Uri and deployment template file URIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_deployment_template_id** | **str** | Default deployment template ID. | [optional] 
**deployment_fragment_file_uris** | **Dict[str, str]** | List of key-value pairs containing the deployment fragment file IDs defined in the package manifest. | [optional] [readonly] 
**deployment_template_file_uris** | **Dict[str, str]** | List of key-value containing the deployment template file IDs defined in the package manifest. | [optional] [readonly] 
**ui_definition_file_uri** | **str** | UI definition file URI. | [optional] 

## Example

```python
from openapi_client.models.definition_templates import DefinitionTemplates

# TODO update the JSON string below
json = "{}"
# create an instance of DefinitionTemplates from a JSON string
definition_templates_instance = DefinitionTemplates.from_json(json)
# print the JSON string representation of the object
print(DefinitionTemplates.to_json())

# convert the object into a dict
definition_templates_dict = definition_templates_instance.to_dict()
# create an instance of DefinitionTemplates from a dict
definition_templates_from_dict = DefinitionTemplates.from_dict(definition_templates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


