# ContextualConfiguration

Details of the contextual configuration for a custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | **object** | The field configuration. | [optional] 
**field_context_id** | **str** | The ID of the field context the configuration is associated with. | [readonly] 
**id** | **str** | The ID of the configuration. | 
**var_schema** | **object** | The field value schema. | [optional] 

## Example

```python
from openapi_client.models.contextual_configuration import ContextualConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ContextualConfiguration from a JSON string
contextual_configuration_instance = ContextualConfiguration.from_json(json)
# print the JSON string representation of the object
print(ContextualConfiguration.to_json())

# convert the object into a dict
contextual_configuration_dict = contextual_configuration_instance.to_dict()
# create an instance of ContextualConfiguration from a dict
contextual_configuration_from_dict = ContextualConfiguration.from_dict(contextual_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


