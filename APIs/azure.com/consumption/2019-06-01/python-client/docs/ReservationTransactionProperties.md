# ReservationTransactionProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The name of the account that makes the transaction. | [optional] [readonly] 
**account_owner_email** | **str** | The email of the account owner that makes the transaction. | [optional] [readonly] 
**amount** | **float** | The charge of the transaction. | [optional] [readonly] 
**arm_sku_name** | **str** | This is the ARM Sku name. It can be used to join with the serviceType field in additional info in usage records. | [optional] [readonly] 
**cost_center** | **str** | The cost center of this department if it is a department and a cost center is provided. | [optional] [readonly] 
**currency** | **str** | The ISO currency in which the transaction is charged, for example, USD. | [optional] [readonly] 
**current_enrollment** | **str** | The current enrollment. | [optional] [readonly] 
**department_name** | **str** | The department name. | [optional] [readonly] 
**description** | **str** | The description of the transaction. | [optional] [readonly] 
**event_date** | **datetime** | The date of the transaction | [optional] [readonly] 
**event_type** | **str** | The type of the transaction (Purchase, Cancel, etc.) | [optional] [readonly] 
**purchasing_enrollment** | **str** | The purchasing enrollment. | [optional] [readonly] 
**purchasing_subscription_guid** | **str** | The subscription guid that makes the transaction. | [optional] [readonly] 
**purchasing_subscription_name** | **str** | The subscription name that makes the transaction. | [optional] [readonly] 
**quantity** | **float** | The quantity of the transaction. | [optional] [readonly] 
**region** | **str** | The region of the transaction. | [optional] [readonly] 
**reservation_order_id** | **str** | The reservation order ID is the identifier for a reservation purchase. Each reservation order ID represents a single purchase transaction. A reservation order contains reservations. The reservation order specifies the VM size and region for the reservations. | [optional] [readonly] 
**reservation_order_name** | **str** | The name of the reservation order. | [optional] [readonly] 
**term** | **str** | This is the term of the transaction. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_transaction_properties import ReservationTransactionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationTransactionProperties from a JSON string
reservation_transaction_properties_instance = ReservationTransactionProperties.from_json(json)
# print the JSON string representation of the object
print(ReservationTransactionProperties.to_json())

# convert the object into a dict
reservation_transaction_properties_dict = reservation_transaction_properties_instance.to_dict()
# create an instance of ReservationTransactionProperties from a dict
reservation_transaction_properties_from_dict = ReservationTransactionProperties.from_dict(reservation_transaction_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


