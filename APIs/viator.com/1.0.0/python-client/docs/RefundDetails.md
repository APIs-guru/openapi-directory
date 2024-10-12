# RefundDetails

Details of the refund  **Note**: Bookings that have not been confirmed by the supplier and have a status of `\"PENDING\"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `\"CONFIRMED\"`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | Three-letter code indicating the currency in which &#x60;itemPrice&#x60; and &#x60;refundAmount&#x60; are displayed | [optional] 
**item_price** | **float** | The merchant net price at the time this product was booked | [optional] 
**refund_amount** | **float** | Numeric currency amount that will be refunded if this booking is cancelled now | [optional] 
**refund_percentage** | **float** | Percentage of the item price that will be refunded if this booking is cancelled now | [optional] 

## Example

```python
from openapi_client.models.refund_details import RefundDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RefundDetails from a JSON string
refund_details_instance = RefundDetails.from_json(json)
# print the JSON string representation of the object
print(RefundDetails.to_json())

# convert the object into a dict
refund_details_dict = refund_details_instance.to_dict()
# create an instance of RefundDetails from a dict
refund_details_from_dict = RefundDetails.from_dict(refund_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


