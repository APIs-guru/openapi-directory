# MeasurementConfig

Measurement settings of a partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dv360_to_cm_cost_reporting_enabled** | **bool** | Whether or not to report DV360 cost to CM360. | [optional] 
**dv360_to_cm_data_sharing_enabled** | **bool** | Whether or not to include DV360 data in CM360 data transfer reports. | [optional] 

## Example

```python
from openapi_client.models.measurement_config import MeasurementConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MeasurementConfig from a JSON string
measurement_config_instance = MeasurementConfig.from_json(json)
# print the JSON string representation of the object
print(MeasurementConfig.to_json())

# convert the object into a dict
measurement_config_dict = measurement_config_instance.to_dict()
# create an instance of MeasurementConfig from a dict
measurement_config_from_dict = MeasurementConfig.from_dict(measurement_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


