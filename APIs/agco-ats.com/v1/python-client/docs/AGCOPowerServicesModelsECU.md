# AGCOPowerServicesModelsECU

An AGCO Power ECU

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_code** | **bytearray** | The code used to activate the ECU. May not be modified. Returned only on activation. | [optional] 
**damaged_description** | **str** | A description why the ECU cannot be deactivated. | [optional] 
**engine_serial_number** | **str** | The serial number of the ECU’s engine | 
**replaces_ecu_serial_number** | **str** | The serial number of the ECU that this ECU replaces. Required if activating an ECU.. | [optional] 
**serial_number** | **str** | The serial number of the ECU | 
**state** | **str** | The state of the ECU | 

## Example

```python
from openapi_client.models.agco_power_services_models_ecu import AGCOPowerServicesModelsECU

# TODO update the JSON string below
json = "{}"
# create an instance of AGCOPowerServicesModelsECU from a JSON string
agco_power_services_models_ecu_instance = AGCOPowerServicesModelsECU.from_json(json)
# print the JSON string representation of the object
print(AGCOPowerServicesModelsECU.to_json())

# convert the object into a dict
agco_power_services_models_ecu_dict = agco_power_services_models_ecu_instance.to_dict()
# create an instance of AGCOPowerServicesModelsECU from a dict
agco_power_services_models_ecu_from_dict = AGCOPowerServicesModelsECU.from_dict(agco_power_services_models_ecu_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


