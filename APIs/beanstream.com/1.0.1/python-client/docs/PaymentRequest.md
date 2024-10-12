# PaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | A decimal value in dollars, or relevant currency. digits(9) | 
**billing** | [**Address**](Address.md) |  | [optional] 
**card** | [**Card**](Card.md) |  | [optional] 
**comments** | **str** | alphanumeric (256) | [optional] 
**custom** | [**Custom**](Custom.md) |  | [optional] 
**customer_ip** | **str** | alphanumeric (30) | [optional] 
**language** | **str** | characters (3) | [optional] 
**order_number** | **str** | A unique order number. alphanumeric(30) | [optional] 
**payment_method** | **str** | One of (card, token, payment_profile, cash, cheque). characters(20) | 
**payment_profile** | [**ProfilePurchase**](ProfilePurchase.md) |  | [optional] 
**shipping** | [**Address**](Address.md) |  | [optional] 
**term_url** | **str** | alphanumeric (256) | [optional] 
**token** | [**TokenPurchase**](TokenPurchase.md) |  | [optional] 

## Example

```python
from openapi_client.models.payment_request import PaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequest from a JSON string
payment_request_instance = PaymentRequest.from_json(json)
# print the JSON string representation of the object
print(PaymentRequest.to_json())

# convert the object into a dict
payment_request_dict = payment_request_instance.to_dict()
# create an instance of PaymentRequest from a dict
payment_request_from_dict = PaymentRequest.from_dict(payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


