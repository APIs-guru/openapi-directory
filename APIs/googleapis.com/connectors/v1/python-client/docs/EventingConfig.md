# EventingConfig

Eventing Configuration of a connection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_variables** | [**List[ConfigVariable]**](ConfigVariable.md) | Additional eventing related field values | [optional] 
**auth_config** | [**AuthConfig**](AuthConfig.md) |  | [optional] 
**dead_letter_config** | [**DeadLetterConfig**](DeadLetterConfig.md) |  | [optional] 
**enrichment_enabled** | **bool** | Enrichment Enabled. | [optional] 
**events_listener_ingress_endpoint** | **str** | Optional. Ingress endpoint of the event listener. This is used only when private connectivity is enabled. | [optional] 
**listener_auth_config** | [**AuthConfig**](AuthConfig.md) |  | [optional] 
**private_connectivity_enabled** | **bool** | Optional. Private Connectivity Enabled. | [optional] 
**proxy_destination_config** | [**DestinationConfig**](DestinationConfig.md) |  | [optional] 
**registration_destination_config** | [**DestinationConfig**](DestinationConfig.md) |  | [optional] 
**trigger_config_variables** | [**List[ConfigVariable]**](ConfigVariable.md) | Optional. Additional eventing related field values | [optional] 

## Example

```python
from openapi_client.models.eventing_config import EventingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EventingConfig from a JSON string
eventing_config_instance = EventingConfig.from_json(json)
# print the JSON string representation of the object
print(EventingConfig.to_json())

# convert the object into a dict
eventing_config_dict = eventing_config_instance.to_dict()
# create an instance of EventingConfig from a dict
eventing_config_from_dict = EventingConfig.from_dict(eventing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


