# ThroughputSettingsResource

Cosmos DB resource throughput object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minimum_throughput** | **str** | The minimum throughput of the resource | [optional] [readonly] 
**offer_replace_pending** | **str** | The throughput replace is pending | [optional] [readonly] 
**throughput** | **int** | Value of the Cosmos DB resource throughput | 

## Example

```python
from openapi_client.models.throughput_settings_resource import ThroughputSettingsResource

# TODO update the JSON string below
json = "{}"
# create an instance of ThroughputSettingsResource from a JSON string
throughput_settings_resource_instance = ThroughputSettingsResource.from_json(json)
# print the JSON string representation of the object
print(ThroughputSettingsResource.to_json())

# convert the object into a dict
throughput_settings_resource_dict = throughput_settings_resource_instance.to_dict()
# create an instance of ThroughputSettingsResource from a dict
throughput_settings_resource_from_dict = ThroughputSettingsResource.from_dict(throughput_settings_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


