# PeeringLocationPropertiesExchange

The properties that define an exchange peering location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peering_facilities** | [**List[ExchangePeeringFacility]**](ExchangePeeringFacility.md) | The list of exchange peering facilities at the peering location. | [optional] 

## Example

```python
from openapi_client.models.peering_location_properties_exchange import PeeringLocationPropertiesExchange

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringLocationPropertiesExchange from a JSON string
peering_location_properties_exchange_instance = PeeringLocationPropertiesExchange.from_json(json)
# print the JSON string representation of the object
print(PeeringLocationPropertiesExchange.to_json())

# convert the object into a dict
peering_location_properties_exchange_dict = peering_location_properties_exchange_instance.to_dict()
# create an instance of PeeringLocationPropertiesExchange from a dict
peering_location_properties_exchange_from_dict = PeeringLocationPropertiesExchange.from_dict(peering_location_properties_exchange_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


