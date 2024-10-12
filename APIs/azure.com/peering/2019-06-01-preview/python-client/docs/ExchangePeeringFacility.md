# ExchangePeeringFacility

The properties that define an exchange peering facility.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_in_mbps** | **int** | The bandwidth of the connection between Microsoft and the exchange peering facility. | [optional] 
**exchange_name** | **str** | The name of the exchange peering facility. | [optional] 
**facility_ipv4_prefix** | **str** | The IPv4 prefixes associated with the exchange peering facility. | [optional] 
**facility_ipv6_prefix** | **str** | The IPv6 prefixes associated with the exchange peering facility. | [optional] 
**microsoft_ipv4_address** | **str** | The IPv4 address of Microsoft at the exchange peering facility. | [optional] 
**microsoft_ipv6_address** | **str** | The IPv6 address of Microsoft at the exchange peering facility. | [optional] 
**peering_db_facility_id** | **int** | The PeeringDB.com ID of the facility. | [optional] 
**peering_db_facility_link** | **str** | The PeeringDB.com URL of the facility. | [optional] 

## Example

```python
from openapi_client.models.exchange_peering_facility import ExchangePeeringFacility

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangePeeringFacility from a JSON string
exchange_peering_facility_instance = ExchangePeeringFacility.from_json(json)
# print the JSON string representation of the object
print(ExchangePeeringFacility.to_json())

# convert the object into a dict
exchange_peering_facility_dict = exchange_peering_facility_instance.to_dict()
# create an instance of ExchangePeeringFacility from a dict
exchange_peering_facility_from_dict = ExchangePeeringFacility.from_dict(exchange_peering_facility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


