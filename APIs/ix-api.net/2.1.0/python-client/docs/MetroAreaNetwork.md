# MetroAreaNetwork


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metro_area** | **str** | The id of the metro area.  | 
**name** | **str** | The name of the metro area network.  | 
**pops** | **List[str]** | List of pops in the metro area network. | 
**service_provider** | **str** | The service provider is operating the network. Usually the exchange.  | 

## Example

```python
from openapi_client.models.metro_area_network import MetroAreaNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of MetroAreaNetwork from a JSON string
metro_area_network_instance = MetroAreaNetwork.from_json(json)
# print the JSON string representation of the object
print(MetroAreaNetwork.to_json())

# convert the object into a dict
metro_area_network_dict = metro_area_network_instance.to_dict()
# create an instance of MetroAreaNetwork from a dict
metro_area_network_from_dict = MetroAreaNetwork.from_dict(metro_area_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


