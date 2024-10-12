# ThroughputUpdateParameters

Parameters to update Cosmos DB resource throughput.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ThroughputUpdateProperties**](ThroughputUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.throughput_update_parameters import ThroughputUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ThroughputUpdateParameters from a JSON string
throughput_update_parameters_instance = ThroughputUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ThroughputUpdateParameters.to_json())

# convert the object into a dict
throughput_update_parameters_dict = throughput_update_parameters_instance.to_dict()
# create an instance of ThroughputUpdateParameters from a dict
throughput_update_parameters_from_dict = ThroughputUpdateParameters.from_dict(throughput_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


