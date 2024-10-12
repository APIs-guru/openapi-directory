# ThroughputSettingsGetProperties

The properties of an Azure Cosmos DB resource throughput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**ThroughputSettingsGetPropertiesResource**](ThroughputSettingsGetPropertiesResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.throughput_settings_get_properties import ThroughputSettingsGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ThroughputSettingsGetProperties from a JSON string
throughput_settings_get_properties_instance = ThroughputSettingsGetProperties.from_json(json)
# print the JSON string representation of the object
print(ThroughputSettingsGetProperties.to_json())

# convert the object into a dict
throughput_settings_get_properties_dict = throughput_settings_get_properties_instance.to_dict()
# create an instance of ThroughputSettingsGetProperties from a dict
throughput_settings_get_properties_from_dict = ThroughputSettingsGetProperties.from_dict(throughput_settings_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


