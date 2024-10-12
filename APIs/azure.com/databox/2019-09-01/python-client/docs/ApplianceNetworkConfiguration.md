# ApplianceNetworkConfiguration

The Network Adapter configuration of a DataBox.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mac_address** | **str** | Mac Address. | [optional] [readonly] 
**name** | **str** | Name of the network. | [optional] [readonly] 

## Example

```python
from openapi_client.models.appliance_network_configuration import ApplianceNetworkConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ApplianceNetworkConfiguration from a JSON string
appliance_network_configuration_instance = ApplianceNetworkConfiguration.from_json(json)
# print the JSON string representation of the object
print(ApplianceNetworkConfiguration.to_json())

# convert the object into a dict
appliance_network_configuration_dict = appliance_network_configuration_instance.to_dict()
# create an instance of ApplianceNetworkConfiguration from a dict
appliance_network_configuration_from_dict = ApplianceNetworkConfiguration.from_dict(appliance_network_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


