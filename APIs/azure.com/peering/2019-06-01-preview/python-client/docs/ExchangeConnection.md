# ExchangeConnection

The properties that define an exchange connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bgp_session** | [**BgpSession**](BgpSession.md) |  | [optional] 
**connection_identifier** | **str** | The unique identifier (GUID) for the connection. | [optional] 
**connection_state** | **str** | The state of the connection. | [optional] [readonly] 
**peering_db_facility_id** | **int** | The PeeringDB.com ID of the facility at which the connection has to be set up. | [optional] 

## Example

```python
from openapi_client.models.exchange_connection import ExchangeConnection

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangeConnection from a JSON string
exchange_connection_instance = ExchangeConnection.from_json(json)
# print the JSON string representation of the object
print(ExchangeConnection.to_json())

# convert the object into a dict
exchange_connection_dict = exchange_connection_instance.to_dict()
# create an instance of ExchangeConnection from a dict
exchange_connection_from_dict = ExchangeConnection.from_dict(exchange_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


