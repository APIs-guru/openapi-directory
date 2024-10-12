# PeeringPropertiesExchange

The properties that define an exchange peering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connections** | [**List[ExchangeConnection]**](ExchangeConnection.md) | The set of connections that constitute an exchange peering. | [optional] 
**peer_asn** | [**SubResource**](SubResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.peering_properties_exchange import PeeringPropertiesExchange

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringPropertiesExchange from a JSON string
peering_properties_exchange_instance = PeeringPropertiesExchange.from_json(json)
# print the JSON string representation of the object
print(PeeringPropertiesExchange.to_json())

# convert the object into a dict
peering_properties_exchange_dict = peering_properties_exchange_instance.to_dict()
# create an instance of PeeringPropertiesExchange from a dict
peering_properties_exchange_from_dict = PeeringPropertiesExchange.from_dict(peering_properties_exchange_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


