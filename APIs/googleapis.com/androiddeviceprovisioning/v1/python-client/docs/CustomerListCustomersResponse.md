# CustomerListCustomersResponse

Response message for listing my customers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customers** | [**List[Company]**](Company.md) | The customer accounts the calling user is a member of. | [optional] 
**next_page_token** | **str** | A token used to access the next page of results. Omitted if no further results are available. | [optional] 

## Example

```python
from openapi_client.models.customer_list_customers_response import CustomerListCustomersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerListCustomersResponse from a JSON string
customer_list_customers_response_instance = CustomerListCustomersResponse.from_json(json)
# print the JSON string representation of the object
print(CustomerListCustomersResponse.to_json())

# convert the object into a dict
customer_list_customers_response_dict = customer_list_customers_response_instance.to_dict()
# create an instance of CustomerListCustomersResponse from a dict
customer_list_customers_response_from_dict = CustomerListCustomersResponse.from_dict(customer_list_customers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


