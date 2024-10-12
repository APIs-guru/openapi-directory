# ThroughputSettingsGetPropertiesResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minimum_throughput** | **str** | The minimum throughput of the resource | [optional] [readonly] 
**offer_replace_pending** | **str** | The throughput replace is pending | [optional] [readonly] 
**throughput** | **int** | Value of the Cosmos DB resource throughput | 
**etag** | **str** | A system generated property representing the resource etag required for optimistic concurrency control. | [optional] [readonly] 
**rid** | **str** | A system generated property. A unique identifier. | [optional] [readonly] 
**ts** | **object** | A system generated property that denotes the last updated timestamp of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.throughput_settings_get_properties_resource import ThroughputSettingsGetPropertiesResource

# TODO update the JSON string below
json = "{}"
# create an instance of ThroughputSettingsGetPropertiesResource from a JSON string
throughput_settings_get_properties_resource_instance = ThroughputSettingsGetPropertiesResource.from_json(json)
# print the JSON string representation of the object
print(ThroughputSettingsGetPropertiesResource.to_json())

# convert the object into a dict
throughput_settings_get_properties_resource_dict = throughput_settings_get_properties_resource_instance.to_dict()
# create an instance of ThroughputSettingsGetPropertiesResource from a dict
throughput_settings_get_properties_resource_from_dict = ThroughputSettingsGetPropertiesResource.from_dict(throughput_settings_get_properties_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


