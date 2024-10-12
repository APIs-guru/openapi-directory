# ConsumptionMeteringConfig

Parameters for controlling consumption metering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether to enable consumption metering for this cluster. If enabled, a second BigQuery table will be created to hold resource consumption records. | [optional] 

## Example

```python
from openapi_client.models.consumption_metering_config import ConsumptionMeteringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumptionMeteringConfig from a JSON string
consumption_metering_config_instance = ConsumptionMeteringConfig.from_json(json)
# print the JSON string representation of the object
print(ConsumptionMeteringConfig.to_json())

# convert the object into a dict
consumption_metering_config_dict = consumption_metering_config_instance.to_dict()
# create an instance of ConsumptionMeteringConfig from a dict
consumption_metering_config_from_dict = ConsumptionMeteringConfig.from_dict(consumption_metering_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


