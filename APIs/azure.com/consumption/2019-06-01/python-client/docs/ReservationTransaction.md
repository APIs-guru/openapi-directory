# ReservationTransaction

Reservation transaction resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReservationTransactionProperties**](ReservationTransactionProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_transaction import ReservationTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationTransaction from a JSON string
reservation_transaction_instance = ReservationTransaction.from_json(json)
# print the JSON string representation of the object
print(ReservationTransaction.to_json())

# convert the object into a dict
reservation_transaction_dict = reservation_transaction_instance.to_dict()
# create an instance of ReservationTransaction from a dict
reservation_transaction_from_dict = ReservationTransaction.from_dict(reservation_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


