# NetworkUsageSample

Network usage sample. Values are across all network interfaces.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_egress_bps** | **float** | Average network egress in B/s sampled over a short window. Must be non-negative. | [optional] 
**average_ingress_bps** | **float** | Average network ingress in B/s sampled over a short window. Must be non-negative. | [optional] 

## Example

```python
from openapi_client.models.network_usage_sample import NetworkUsageSample

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkUsageSample from a JSON string
network_usage_sample_instance = NetworkUsageSample.from_json(json)
# print the JSON string representation of the object
print(NetworkUsageSample.to_json())

# convert the object into a dict
network_usage_sample_dict = network_usage_sample_instance.to_dict()
# create an instance of NetworkUsageSample from a dict
network_usage_sample_from_dict = NetworkUsageSample.from_dict(network_usage_sample_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


