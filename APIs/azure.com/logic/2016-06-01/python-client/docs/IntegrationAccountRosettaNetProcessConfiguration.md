# IntegrationAccountRosettaNetProcessConfiguration

The integration account RosettaNet process configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IntegrationAccountRosettaNetProcessConfigurationProperties**](IntegrationAccountRosettaNetProcessConfigurationProperties.md) |  | 
**id** | **str** | The resource id. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] 
**name** | **str** | Gets the resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | Gets the resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.integration_account_rosetta_net_process_configuration import IntegrationAccountRosettaNetProcessConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountRosettaNetProcessConfiguration from a JSON string
integration_account_rosetta_net_process_configuration_instance = IntegrationAccountRosettaNetProcessConfiguration.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountRosettaNetProcessConfiguration.to_json())

# convert the object into a dict
integration_account_rosetta_net_process_configuration_dict = integration_account_rosetta_net_process_configuration_instance.to_dict()
# create an instance of IntegrationAccountRosettaNetProcessConfiguration from a dict
integration_account_rosetta_net_process_configuration_from_dict = IntegrationAccountRosettaNetProcessConfiguration.from_dict(integration_account_rosetta_net_process_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


