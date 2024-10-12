# GetEcommerceCustomersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EcommerceCustomer]**](EcommerceCustomer.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_ecommerce_customers_response import GetEcommerceCustomersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetEcommerceCustomersResponse from a JSON string
get_ecommerce_customers_response_instance = GetEcommerceCustomersResponse.from_json(json)
# print the JSON string representation of the object
print(GetEcommerceCustomersResponse.to_json())

# convert the object into a dict
get_ecommerce_customers_response_dict = get_ecommerce_customers_response_instance.to_dict()
# create an instance of GetEcommerceCustomersResponse from a dict
get_ecommerce_customers_response_from_dict = GetEcommerceCustomersResponse.from_dict(get_ecommerce_customers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


