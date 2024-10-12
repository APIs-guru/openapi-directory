# GetEcommerceCustomerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EcommerceCustomer**](EcommerceCustomer.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_ecommerce_customer_response import GetEcommerceCustomerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetEcommerceCustomerResponse from a JSON string
get_ecommerce_customer_response_instance = GetEcommerceCustomerResponse.from_json(json)
# print the JSON string representation of the object
print(GetEcommerceCustomerResponse.to_json())

# convert the object into a dict
get_ecommerce_customer_response_dict = get_ecommerce_customer_response_instance.to_dict()
# create an instance of GetEcommerceCustomerResponse from a dict
get_ecommerce_customer_response_from_dict = GetEcommerceCustomerResponse.from_dict(get_ecommerce_customer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


