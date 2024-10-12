# ReservationTransactionsListResult

Result of listing reservation transactions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[ReservationTransaction]**](ReservationTransaction.md) | The list of reservation transactions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_transactions_list_result import ReservationTransactionsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationTransactionsListResult from a JSON string
reservation_transactions_list_result_instance = ReservationTransactionsListResult.from_json(json)
# print the JSON string representation of the object
print(ReservationTransactionsListResult.to_json())

# convert the object into a dict
reservation_transactions_list_result_dict = reservation_transactions_list_result_instance.to_dict()
# create an instance of ReservationTransactionsListResult from a dict
reservation_transactions_list_result_from_dict = ReservationTransactionsListResult.from_dict(reservation_transactions_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


