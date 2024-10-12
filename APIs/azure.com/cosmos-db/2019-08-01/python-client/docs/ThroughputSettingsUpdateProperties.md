# ThroughputSettingsUpdateProperties

Properties to update Azure Cosmos DB resource throughput.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**ThroughputSettingsResource**](ThroughputSettingsResource.md) |  | 

## Example

```python
from openapi_client.models.throughput_settings_update_properties import ThroughputSettingsUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ThroughputSettingsUpdateProperties from a JSON string
throughput_settings_update_properties_instance = ThroughputSettingsUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ThroughputSettingsUpdateProperties.to_json())

# convert the object into a dict
throughput_settings_update_properties_dict = throughput_settings_update_properties_instance.to_dict()
# create an instance of ThroughputSettingsUpdateProperties from a dict
throughput_settings_update_properties_from_dict = ThroughputSettingsUpdateProperties.from_dict(throughput_settings_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


