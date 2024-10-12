# ListNetworkUsageResponse

Response with Networks with IPs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**networks** | [**List[NetworkUsage]**](NetworkUsage.md) | Networks with IPs. | [optional] 

## Example

```python
from openapi_client.models.list_network_usage_response import ListNetworkUsageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNetworkUsageResponse from a JSON string
list_network_usage_response_instance = ListNetworkUsageResponse.from_json(json)
# print the JSON string representation of the object
print(ListNetworkUsageResponse.to_json())

# convert the object into a dict
list_network_usage_response_dict = list_network_usage_response_instance.to_dict()
# create an instance of ListNetworkUsageResponse from a dict
list_network_usage_response_from_dict = ListNetworkUsageResponse.from_dict(list_network_usage_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


