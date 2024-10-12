# AGCOPowerServicesModelsProductionData

Production data for an AGCO Power engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | Type of data. Valid types are (but not limited to)              &#39;PowerCalibration&#39; | 
**data_values** | **bytearray** | Raw values of the calibration data | 

## Example

```python
from openapi_client.models.agco_power_services_models_production_data import AGCOPowerServicesModelsProductionData

# TODO update the JSON string below
json = "{}"
# create an instance of AGCOPowerServicesModelsProductionData from a JSON string
agco_power_services_models_production_data_instance = AGCOPowerServicesModelsProductionData.from_json(json)
# print the JSON string representation of the object
print(AGCOPowerServicesModelsProductionData.to_json())

# convert the object into a dict
agco_power_services_models_production_data_dict = agco_power_services_models_production_data_instance.to_dict()
# create an instance of AGCOPowerServicesModelsProductionData from a dict
agco_power_services_models_production_data_from_dict = AGCOPowerServicesModelsProductionData.from_dict(agco_power_services_models_production_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


