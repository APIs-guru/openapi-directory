# NetworkAddressReservation

A reservation of one or more addresses in a network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_address** | **str** | The last address of this reservation block, inclusive. I.e., for cases when reservations are only single addresses, end_address and start_address will be the same. Must be specified as a single IPv4 address, e.g. 10.1.2.2. | [optional] 
**note** | **str** | A note about this reservation, intended for human consumption. | [optional] 
**start_address** | **str** | The first address of this reservation block. Must be specified as a single IPv4 address, e.g. 10.1.2.2. | [optional] 

## Example

```python
from openapi_client.models.network_address_reservation import NetworkAddressReservation

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkAddressReservation from a JSON string
network_address_reservation_instance = NetworkAddressReservation.from_json(json)
# print the JSON string representation of the object
print(NetworkAddressReservation.to_json())

# convert the object into a dict
network_address_reservation_dict = network_address_reservation_instance.to_dict()
# create an instance of NetworkAddressReservation from a dict
network_address_reservation_from_dict = NetworkAddressReservation.from_dict(network_address_reservation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


