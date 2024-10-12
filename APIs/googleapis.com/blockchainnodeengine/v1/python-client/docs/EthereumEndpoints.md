# EthereumEndpoints

Contains endpoint information specific to Ethereum nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beacon_api_endpoint** | **str** | Output only. The assigned URL for the node&#39;s Beacon API endpoint. | [optional] [readonly] 
**beacon_prometheus_metrics_api_endpoint** | **str** | Output only. The assigned URL for the node&#39;s Beacon Prometheus metrics endpoint. See [Prometheus Metrics](https://lighthouse-book.sigmaprime.io/advanced_metrics.html) for more details. | [optional] [readonly] 
**execution_client_prometheus_metrics_api_endpoint** | **str** | Output only. The assigned URL for the node&#39;s execution client&#39;s Prometheus metrics endpoint. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ethereum_endpoints import EthereumEndpoints

# TODO update the JSON string below
json = "{}"
# create an instance of EthereumEndpoints from a JSON string
ethereum_endpoints_instance = EthereumEndpoints.from_json(json)
# print the JSON string representation of the object
print(EthereumEndpoints.to_json())

# convert the object into a dict
ethereum_endpoints_dict = ethereum_endpoints_instance.to_dict()
# create an instance of EthereumEndpoints from a dict
ethereum_endpoints_from_dict = EthereumEndpoints.from_dict(ethereum_endpoints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


