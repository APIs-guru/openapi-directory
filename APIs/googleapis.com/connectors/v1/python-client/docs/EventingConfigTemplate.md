# EventingConfigTemplate

Eventing Config details of a connector version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_variables** | [**List[ConfigVariableTemplate]**](ConfigVariableTemplate.md) | Additional fields that need to be rendered. | [optional] 
**auth_config_templates** | [**List[AuthConfigTemplate]**](AuthConfigTemplate.md) | AuthConfigTemplates represents the auth values for the webhook adapter. | [optional] 
**auto_refresh** | **bool** | Auto refresh to extend webhook life. | [optional] 
**auto_registration_supported** | **bool** | Auto Registration supported. | [optional] 
**encryption_key_template** | [**ConfigVariableTemplate**](ConfigVariableTemplate.md) |  | [optional] 
**enrichment_supported** | **bool** | Enrichment Supported. | [optional] 
**event_listener_type** | **str** | The type of the event listener for a specific connector. | [optional] 
**is_eventing_supported** | **bool** | Is Eventing Supported. | [optional] 
**listener_auth_config_templates** | [**List[AuthConfigTemplate]**](AuthConfigTemplate.md) | ListenerAuthConfigTemplates represents the auth values for the event listener. | [optional] 
**proxy_destination_config** | [**DestinationConfigTemplate**](DestinationConfigTemplate.md) |  | [optional] 
**registration_destination_config** | [**DestinationConfigTemplate**](DestinationConfigTemplate.md) |  | [optional] 
**trigger_config_variables** | [**List[ConfigVariableTemplate]**](ConfigVariableTemplate.md) | Trigger Config fields that needs to be rendered | [optional] 

## Example

```python
from openapi_client.models.eventing_config_template import EventingConfigTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of EventingConfigTemplate from a JSON string
eventing_config_template_instance = EventingConfigTemplate.from_json(json)
# print the JSON string representation of the object
print(EventingConfigTemplate.to_json())

# convert the object into a dict
eventing_config_template_dict = eventing_config_template_instance.to_dict()
# create an instance of EventingConfigTemplate from a dict
eventing_config_template_from_dict = EventingConfigTemplate.from_dict(eventing_config_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


