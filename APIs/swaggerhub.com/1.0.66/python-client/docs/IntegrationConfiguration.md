# IntegrationConfiguration

Common configuration details for all integrations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the integration is enabled or disabled | [optional] [default to True]
**id** | **str** | ID of the integration | [optional] [readonly] 
**name** | **str** | The display name of the integration. Must be unique among all integrations configured for the given API version. | 

## Example

```python
from openapi_client.models.integration_configuration import IntegrationConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationConfiguration from a JSON string
integration_configuration_instance = IntegrationConfiguration.from_json(json)
# print the JSON string representation of the object
print(IntegrationConfiguration.to_json())

# convert the object into a dict
integration_configuration_dict = integration_configuration_instance.to_dict()
# create an instance of IntegrationConfiguration from a dict
integration_configuration_from_dict = IntegrationConfiguration.from_dict(integration_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


