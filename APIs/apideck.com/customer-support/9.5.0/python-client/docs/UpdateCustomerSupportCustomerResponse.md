# UpdateCustomerSupportCustomerResponse


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
from openapi_client.models.update_customer_support_customer_response import UpdateCustomerSupportCustomerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCustomerSupportCustomerResponse from a JSON string
update_customer_support_customer_response_instance = UpdateCustomerSupportCustomerResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateCustomerSupportCustomerResponse.to_json())

# convert the object into a dict
update_customer_support_customer_response_dict = update_customer_support_customer_response_instance.to_dict()
# create an instance of UpdateCustomerSupportCustomerResponse from a dict
update_customer_support_customer_response_from_dict = UpdateCustomerSupportCustomerResponse.from_dict(update_customer_support_customer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


