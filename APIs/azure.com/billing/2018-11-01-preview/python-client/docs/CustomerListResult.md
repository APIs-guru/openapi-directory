# CustomerListResult

Result of listing customers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[Customer]**](Customer.md) | The list of customers. | [optional] [readonly] 

## Example

```python
from openapi_client.models.customer_list_result import CustomerListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerListResult from a JSON string
customer_list_result_instance = CustomerListResult.from_json(json)
# print the JSON string representation of the object
print(CustomerListResult.to_json())

# convert the object into a dict
customer_list_result_dict = customer_list_result_instance.to_dict()
# create an instance of CustomerListResult from a dict
customer_list_result_from_dict = CustomerListResult.from_dict(customer_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


