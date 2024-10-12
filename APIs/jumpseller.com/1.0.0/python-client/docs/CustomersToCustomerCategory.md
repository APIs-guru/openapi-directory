# CustomersToCustomerCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customers** | [**List[CustomerToCustomerCategory]**](CustomerToCustomerCategory.md) |  | [optional] 

## Example

```python
from openapi_client.models.customers_to_customer_category import CustomersToCustomerCategory

# TODO update the JSON string below
json = "{}"
# create an instance of CustomersToCustomerCategory from a JSON string
customers_to_customer_category_instance = CustomersToCustomerCategory.from_json(json)
# print the JSON string representation of the object
print(CustomersToCustomerCategory.to_json())

# convert the object into a dict
customers_to_customer_category_dict = customers_to_customer_category_instance.to_dict()
# create an instance of CustomersToCustomerCategory from a dict
customers_to_customer_category_from_dict = CustomersToCustomerCategory.from_dict(customers_to_customer_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


