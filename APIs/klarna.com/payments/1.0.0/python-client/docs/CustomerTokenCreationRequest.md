# CustomerTokenCreationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_address** | [**Address**](Address.md) |  | [optional] 
**customer** | [**Customer**](Customer.md) |  | [optional] 
**description** | **str** | Description of the purpose of the token. | 
**intended_use** | **str** | Intended use for the token. | 
**locale** | **str** | RFC 1766 customer&#39;s locale. | 
**purchase_country** | **str** | ISO 3166 alpha-2 purchase country. | 
**purchase_currency** | **str** | ISO 4217 purchase currency. | 

## Example

```python
from openapi_client.models.customer_token_creation_request import CustomerTokenCreationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerTokenCreationRequest from a JSON string
customer_token_creation_request_instance = CustomerTokenCreationRequest.from_json(json)
# print the JSON string representation of the object
print(CustomerTokenCreationRequest.to_json())

# convert the object into a dict
customer_token_creation_request_dict = customer_token_creation_request_instance.to_dict()
# create an instance of CustomerTokenCreationRequest from a dict
customer_token_creation_request_from_dict = CustomerTokenCreationRequest.from_dict(customer_token_creation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


