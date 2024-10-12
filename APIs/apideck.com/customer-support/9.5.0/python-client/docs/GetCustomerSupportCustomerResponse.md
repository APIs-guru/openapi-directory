# GetCustomerSupportCustomerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CustomerSupportCustomer**](CustomerSupportCustomer.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_customer_support_customer_response import GetCustomerSupportCustomerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomerSupportCustomerResponse from a JSON string
get_customer_support_customer_response_instance = GetCustomerSupportCustomerResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomerSupportCustomerResponse.to_json())

# convert the object into a dict
get_customer_support_customer_response_dict = get_customer_support_customer_response_instance.to_dict()
# create an instance of GetCustomerSupportCustomerResponse from a dict
get_customer_support_customer_response_from_dict = GetCustomerSupportCustomerResponse.from_dict(get_customer_support_customer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


