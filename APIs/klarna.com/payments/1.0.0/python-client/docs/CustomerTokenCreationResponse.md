# CustomerTokenCreationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_address** | [**Address**](Address.md) |  | [optional] 
**customer** | [**CustomerReadCreateToken**](CustomerReadCreateToken.md) |  | [optional] 
**payment_method_reference** | **str** | Used to connect customers with payment method when it is present. | [optional] 
**redirect_url** | **str** | URL to redirect the customer to after placing the order. This is a Klarna URL where Klarna will place a cookie in the customer’s browser (if redirected) and redirect the customer back to the confirmation URL provided by the merchant. This is not a mandatory step but a recommended one to improve the returning customer’s experience. | [optional] 
**token_id** | **str** | Generated customer token. This token will be used to create a new order for the subscription using the Create a New order using token API. | 

## Example

```python
from openapi_client.models.customer_token_creation_response import CustomerTokenCreationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerTokenCreationResponse from a JSON string
customer_token_creation_response_instance = CustomerTokenCreationResponse.from_json(json)
# print the JSON string representation of the object
print(CustomerTokenCreationResponse.to_json())

# convert the object into a dict
customer_token_creation_response_dict = customer_token_creation_response_instance.to_dict()
# create an instance of CustomerTokenCreationResponse from a dict
customer_token_creation_response_from_dict = CustomerTokenCreationResponse.from_dict(customer_token_creation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


