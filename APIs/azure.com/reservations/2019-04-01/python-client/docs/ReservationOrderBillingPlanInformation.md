# ReservationOrderBillingPlanInformation

Information describing the type of billing plan for this reservation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_payment_due_date** | **date** | For recurring billing plans, indicates the date when next payment will be processed. Null when total is paid off. | [optional] 
**pricing_currency_total** | [**Price**](Price.md) |  | [optional] 
**start_date** | **date** | Date when the billing plan has started. | [optional] 
**transactions** | [**List[PaymentDetail]**](PaymentDetail.md) |  | [optional] 

## Example

```python
from openapi_client.models.reservation_order_billing_plan_information import ReservationOrderBillingPlanInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationOrderBillingPlanInformation from a JSON string
reservation_order_billing_plan_information_instance = ReservationOrderBillingPlanInformation.from_json(json)
# print the JSON string representation of the object
print(ReservationOrderBillingPlanInformation.to_json())

# convert the object into a dict
reservation_order_billing_plan_information_dict = reservation_order_billing_plan_information_instance.to_dict()
# create an instance of ReservationOrderBillingPlanInformation from a dict
reservation_order_billing_plan_information_from_dict = ReservationOrderBillingPlanInformation.from_dict(reservation_order_billing_plan_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


