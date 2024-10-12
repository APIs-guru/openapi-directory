# IntegrationAccountRosettaNetProcessConfigurationProperties

The integration account RosettaNet process configuration properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_settings** | [**RosettaNetPipActivitySettings**](RosettaNetPipActivitySettings.md) |  | 
**changed_time** | **datetime** | The changed time. | [optional] [readonly] 
**created_time** | **datetime** | The created time. | [optional] [readonly] 
**description** | **str** | The integration account RosettaNet ProcessConfiguration properties. | [optional] 
**initiator_role_settings** | [**RosettaNetPipRoleSettings**](RosettaNetPipRoleSettings.md) |  | 
**metadata** | **Dict[str, str]** | The metadata. | [optional] 
**process_code** | **str** | The integration account RosettaNet process code. | 
**process_name** | **str** | The integration account RosettaNet process name. | 
**process_version** | **str** | The integration account RosettaNet process version. | 
**responder_role_settings** | [**RosettaNetPipRoleSettings**](RosettaNetPipRoleSettings.md) |  | 

## Example

```python
from openapi_client.models.integration_account_rosetta_net_process_configuration_properties import IntegrationAccountRosettaNetProcessConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountRosettaNetProcessConfigurationProperties from a JSON string
integration_account_rosetta_net_process_configuration_properties_instance = IntegrationAccountRosettaNetProcessConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountRosettaNetProcessConfigurationProperties.to_json())

# convert the object into a dict
integration_account_rosetta_net_process_configuration_properties_dict = integration_account_rosetta_net_process_configuration_properties_instance.to_dict()
# create an instance of IntegrationAccountRosettaNetProcessConfigurationProperties from a dict
integration_account_rosetta_net_process_configuration_properties_from_dict = IntegrationAccountRosettaNetProcessConfigurationProperties.from_dict(integration_account_rosetta_net_process_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


