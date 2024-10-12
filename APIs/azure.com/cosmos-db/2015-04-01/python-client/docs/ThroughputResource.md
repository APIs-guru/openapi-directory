# ThroughputResource

Cosmos DB resource throughput object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**throughput** | **int** | Value of the Cosmos DB resource throughput | 

## Example

```python
from openapi_client.models.throughput_resource import ThroughputResource

# TODO update the JSON string below
json = "{}"
# create an instance of ThroughputResource from a JSON string
throughput_resource_instance = ThroughputResource.from_json(json)
# print the JSON string representation of the object
print(ThroughputResource.to_json())

# convert the object into a dict
throughput_resource_dict = throughput_resource_instance.to_dict()
# create an instance of ThroughputResource from a dict
throughput_resource_from_dict = ThroughputResource.from_dict(throughput_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


