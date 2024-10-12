# DeleteCustomerResponse


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
from openapi_client.models.delete_customer_response import DeleteCustomerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteCustomerResponse from a JSON string
delete_customer_response_instance = DeleteCustomerResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteCustomerResponse.to_json())

# convert the object into a dict
delete_customer_response_dict = delete_customer_response_instance.to_dict()
# create an instance of DeleteCustomerResponse from a dict
delete_customer_response_from_dict = DeleteCustomerResponse.from_dict(delete_customer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


