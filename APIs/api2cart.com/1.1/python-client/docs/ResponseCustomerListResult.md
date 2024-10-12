# ResponseCustomerListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**customer** | [**List[Customer]**](Customer.md) |  | [optional] 
**customers_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.response_customer_list_result import ResponseCustomerListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseCustomerListResult from a JSON string
response_customer_list_result_instance = ResponseCustomerListResult.from_json(json)
# print the JSON string representation of the object
print(ResponseCustomerListResult.to_json())

# convert the object into a dict
response_customer_list_result_dict = response_customer_list_result_instance.to_dict()
# create an instance of ResponseCustomerListResult from a dict
response_customer_list_result_from_dict = ResponseCustomerListResult.from_dict(response_customer_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


