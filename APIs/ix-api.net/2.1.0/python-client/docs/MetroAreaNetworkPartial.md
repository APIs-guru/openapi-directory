# MetroAreaNetworkPartial

MetroAreaNetwork

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**metro_area** | **str** | The id of the metro area.  | [optional] 
**name** | **str** | The name of the metro area network.  | [optional] 
**pops** | **List[str]** | List of pops in the metro area network. | [optional] 
**service_provider** | **str** | The service provider is operating the network. Usually the exchange.  | [optional] 

## Example

```python
from openapi_client.models.metro_area_network_partial import MetroAreaNetworkPartial

# TODO update the JSON string below
json = "{}"
# create an instance of MetroAreaNetworkPartial from a JSON string
metro_area_network_partial_instance = MetroAreaNetworkPartial.from_json(json)
# print the JSON string representation of the object
print(MetroAreaNetworkPartial.to_json())

# convert the object into a dict
metro_area_network_partial_dict = metro_area_network_partial_instance.to_dict()
# create an instance of MetroAreaNetworkPartial from a dict
metro_area_network_partial_from_dict = MetroAreaNetworkPartial.from_dict(metro_area_network_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


