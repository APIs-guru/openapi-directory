# CustomerToCustomerCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email of the Customer | [optional] 
**id** | **int** | Unique identifier of the Customer | [optional] 

## Example

```python
from openapi_client.models.customer_to_customer_category import CustomerToCustomerCategory

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerToCustomerCategory from a JSON string
customer_to_customer_category_instance = CustomerToCustomerCategory.from_json(json)
# print the JSON string representation of the object
print(CustomerToCustomerCategory.to_json())

# convert the object into a dict
customer_to_customer_category_dict = customer_to_customer_category_instance.to_dict()
# create an instance of CustomerToCustomerCategory from a dict
customer_to_customer_category_from_dict = CustomerToCustomerCategory.from_dict(customer_to_customer_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


