# AdvancedDatapathObservabilityConfig

AdvancedDatapathObservabilityConfig specifies configuration of observability features of advanced datapath.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_metrics** | **bool** | Expose flow metrics on nodes | [optional] 
**enable_relay** | **bool** | Enable Relay component | [optional] 
**relay_mode** | **str** | Method used to make Relay available | [optional] 

## Example

```python
from openapi_client.models.advanced_datapath_observability_config import AdvancedDatapathObservabilityConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdvancedDatapathObservabilityConfig from a JSON string
advanced_datapath_observability_config_instance = AdvancedDatapathObservabilityConfig.from_json(json)
# print the JSON string representation of the object
print(AdvancedDatapathObservabilityConfig.to_json())

# convert the object into a dict
advanced_datapath_observability_config_dict = advanced_datapath_observability_config_instance.to_dict()
# create an instance of AdvancedDatapathObservabilityConfig from a dict
advanced_datapath_observability_config_from_dict = AdvancedDatapathObservabilityConfig.from_dict(advanced_datapath_observability_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


