# ThroughputUpdateProperties

Properties to update Azure Cosmos DB resource throughput.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**ThroughputResource**](ThroughputResource.md) |  | 

## Example

```python
from openapi_client.models.throughput_update_properties import ThroughputUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ThroughputUpdateProperties from a JSON string
throughput_update_properties_instance = ThroughputUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ThroughputUpdateProperties.to_json())

# convert the object into a dict
throughput_update_properties_dict = throughput_update_properties_instance.to_dict()
# create an instance of ThroughputUpdateProperties from a dict
throughput_update_properties_from_dict = ThroughputUpdateProperties.from_dict(throughput_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


