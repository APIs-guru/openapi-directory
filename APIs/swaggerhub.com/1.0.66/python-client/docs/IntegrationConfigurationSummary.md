# IntegrationConfigurationSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the integration is enabled or disabled | [optional] [default to True]
**id** | **str** | ID of the integration | [optional] [readonly] 
**name** | **str** | The display name of the integration. Must be unique among all integrations configured for the given API version. | 
**config_type** | **str** | Integration type | 

## Example

```python
from openapi_client.models.integration_configuration_summary import IntegrationConfigurationSummary

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationConfigurationSummary from a JSON string
integration_configuration_summary_instance = IntegrationConfigurationSummary.from_json(json)
# print the JSON string representation of the object
print(IntegrationConfigurationSummary.to_json())

# convert the object into a dict
integration_configuration_summary_dict = integration_configuration_summary_instance.to_dict()
# create an instance of IntegrationConfigurationSummary from a dict
integration_configuration_summary_from_dict = IntegrationConfigurationSummary.from_dict(integration_configuration_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


