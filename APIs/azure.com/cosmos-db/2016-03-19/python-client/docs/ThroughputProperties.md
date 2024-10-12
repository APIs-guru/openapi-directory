# ThroughputProperties

The properties of an Azure Cosmos DB resource throughput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**throughput** | **int** | Value of the Cosmos DB resource throughput | 

## Example

```python
from openapi_client.models.throughput_properties import ThroughputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ThroughputProperties from a JSON string
throughput_properties_instance = ThroughputProperties.from_json(json)
# print the JSON string representation of the object
print(ThroughputProperties.to_json())

# convert the object into a dict
throughput_properties_dict = throughput_properties_instance.to_dict()
# create an instance of ThroughputProperties from a dict
throughput_properties_from_dict = ThroughputProperties.from_dict(throughput_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


