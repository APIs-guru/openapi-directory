# IntegrationConfigurations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integrations** | [**List[IntegrationConfigurationSummary]**](IntegrationConfigurationSummary.md) | A list of integrations | [optional] 

## Example

```python
from openapi_client.models.integration_configurations import IntegrationConfigurations

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationConfigurations from a JSON string
integration_configurations_instance = IntegrationConfigurations.from_json(json)
# print the JSON string representation of the object
print(IntegrationConfigurations.to_json())

# convert the object into a dict
integration_configurations_dict = integration_configurations_instance.to_dict()
# create an instance of IntegrationConfigurations from a dict
integration_configurations_from_dict = IntegrationConfigurations.from_dict(integration_configurations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


