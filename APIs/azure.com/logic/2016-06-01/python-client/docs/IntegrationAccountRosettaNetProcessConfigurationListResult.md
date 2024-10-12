# IntegrationAccountRosettaNetProcessConfigurationListResult

The list of integration account RosettaNet process configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[IntegrationAccountRosettaNetProcessConfiguration]**](IntegrationAccountRosettaNetProcessConfiguration.md) | The list of integration account RosettaNet PIP configuration. | [optional] 

## Example

```python
from openapi_client.models.integration_account_rosetta_net_process_configuration_list_result import IntegrationAccountRosettaNetProcessConfigurationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountRosettaNetProcessConfigurationListResult from a JSON string
integration_account_rosetta_net_process_configuration_list_result_instance = IntegrationAccountRosettaNetProcessConfigurationListResult.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountRosettaNetProcessConfigurationListResult.to_json())

# convert the object into a dict
integration_account_rosetta_net_process_configuration_list_result_dict = integration_account_rosetta_net_process_configuration_list_result_instance.to_dict()
# create an instance of IntegrationAccountRosettaNetProcessConfigurationListResult from a dict
integration_account_rosetta_net_process_configuration_list_result_from_dict = IntegrationAccountRosettaNetProcessConfigurationListResult.from_dict(integration_account_rosetta_net_process_configuration_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


