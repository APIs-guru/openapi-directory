# AdaptiveNetworkHardeningsList

Response for ListAdaptiveNetworkHardenings API service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results | [optional] 
**value** | [**List[AdaptiveNetworkHardening]**](AdaptiveNetworkHardening.md) | A list of Adaptive Network Hardenings resources | [optional] 

## Example

```python
from openapi_client.models.adaptive_network_hardenings_list import AdaptiveNetworkHardeningsList

# TODO update the JSON string below
json = "{}"
# create an instance of AdaptiveNetworkHardeningsList from a JSON string
adaptive_network_hardenings_list_instance = AdaptiveNetworkHardeningsList.from_json(json)
# print the JSON string representation of the object
print(AdaptiveNetworkHardeningsList.to_json())

# convert the object into a dict
adaptive_network_hardenings_list_dict = adaptive_network_hardenings_list_instance.to_dict()
# create an instance of AdaptiveNetworkHardeningsList from a dict
adaptive_network_hardenings_list_from_dict = AdaptiveNetworkHardeningsList.from_dict(adaptive_network_hardenings_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


