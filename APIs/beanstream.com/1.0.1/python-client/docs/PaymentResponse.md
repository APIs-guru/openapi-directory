# PaymentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **int** | Approved &#x3D; 1, declined &#x3D; 0 | [optional] 
**auth_code** | **str** | alphanumeric (32) | [optional] 
**card** | [**CardPurchaseResponse**](CardPurchaseResponse.md) |  | [optional] 
**created** | **str** | alphanumeric (32) | [optional] 
**id** | **str** | digits (9) | [optional] 
**links** | [**List[Link]**](Link.md) |  | [optional] 
**message** | **str** | alphanumeric (256) | [optional] 
**message_id** | **str** | digits (3) | [optional] 
**order_number** | **str** | alphanumeric (32) | [optional] 
**payment_method** | **str** | characters (16) | [optional] 
**type** | **str** | characters (16) | [optional] 

## Example

```python
from openapi_client.models.payment_response import PaymentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentResponse from a JSON string
payment_response_instance = PaymentResponse.from_json(json)
# print the JSON string representation of the object
print(PaymentResponse.to_json())

# convert the object into a dict
payment_response_dict = payment_response_instance.to_dict()
# create an instance of PaymentResponse from a dict
payment_response_from_dict = PaymentResponse.from_dict(payment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


