# ManagedConfigurationTemplate

The managed configurations template for the app, saved from the managed configurations iframe.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_variables** | **Dict[str, str]** | Optional, a map containing configuration variables defined for the configuration. | [optional] 
**template_id** | **str** | The ID of the managed configurations template. | [optional] 

## Example

```python
from openapi_client.models.managed_configuration_template import ManagedConfigurationTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedConfigurationTemplate from a JSON string
managed_configuration_template_instance = ManagedConfigurationTemplate.from_json(json)
# print the JSON string representation of the object
print(ManagedConfigurationTemplate.to_json())

# convert the object into a dict
managed_configuration_template_dict = managed_configuration_template_instance.to_dict()
# create an instance of ManagedConfigurationTemplate from a dict
managed_configuration_template_from_dict = ManagedConfigurationTemplate.from_dict(managed_configuration_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


