# UpdateEcommerceCustomerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UnifiedId**](UnifiedId.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.update_ecommerce_customer_response import UpdateEcommerceCustomerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateEcommerceCustomerResponse from a JSON string
update_ecommerce_customer_response_instance = UpdateEcommerceCustomerResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateEcommerceCustomerResponse.to_json())

# convert the object into a dict
update_ecommerce_customer_response_dict = update_ecommerce_customer_response_instance.to_dict()
# create an instance of UpdateEcommerceCustomerResponse from a dict
update_ecommerce_customer_response_from_dict = UpdateEcommerceCustomerResponse.from_dict(update_ecommerce_customer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


