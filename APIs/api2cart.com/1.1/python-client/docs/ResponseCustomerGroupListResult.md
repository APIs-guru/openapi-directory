# ResponseCustomerGroupListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**group** | [**List[CustomerGroup]**](CustomerGroup.md) |  | [optional] 
**group_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.response_customer_group_list_result import ResponseCustomerGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseCustomerGroupListResult from a JSON string
response_customer_group_list_result_instance = ResponseCustomerGroupListResult.from_json(json)
# print the JSON string representation of the object
print(ResponseCustomerGroupListResult.to_json())

# convert the object into a dict
response_customer_group_list_result_dict = response_customer_group_list_result_instance.to_dict()
# create an instance of ResponseCustomerGroupListResult from a dict
response_customer_group_list_result_from_dict = ResponseCustomerGroupListResult.from_dict(response_customer_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


