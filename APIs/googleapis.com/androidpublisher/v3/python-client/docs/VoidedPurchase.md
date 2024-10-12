# VoidedPurchase

A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | This kind represents a voided purchase object in the androidpublisher service. | [optional] 
**order_id** | **str** | The order id which uniquely identifies a one-time purchase, subscription purchase, or subscription renewal. | [optional] 
**purchase_time_millis** | **str** | The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970). | [optional] 
**purchase_token** | **str** | The token which uniquely identifies a one-time purchase or subscription. To uniquely identify subscription renewals use order_id (available starting from version 3 of the API). | [optional] 
**voided_reason** | **int** | The reason why the purchase was voided, possible values are: 0. Other 1. Remorse 2. Not_received 3. Defective 4. Accidental_purchase 5. Fraud 6. Friendly_fraud 7. Chargeback | [optional] 
**voided_source** | **int** | The initiator of voided purchase, possible values are: 0. User 1. Developer 2. Google | [optional] 
**voided_time_millis** | **str** | The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970). | [optional] 

## Example

```python
from openapi_client.models.voided_purchase import VoidedPurchase

# TODO update the JSON string below
json = "{}"
# create an instance of VoidedPurchase from a JSON string
voided_purchase_instance = VoidedPurchase.from_json(json)
# print the JSON string representation of the object
print(VoidedPurchase.to_json())

# convert the object into a dict
voided_purchase_dict = voided_purchase_instance.to_dict()
# create an instance of VoidedPurchase from a dict
voided_purchase_from_dict = VoidedPurchase.from_dict(voided_purchase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


