# CustomerCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**CustomerCategoryFields**](CustomerCategoryFields.md) |  | [optional] 

## Example

```python
from openapi_client.models.customer_category import CustomerCategory

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerCategory from a JSON string
customer_category_instance = CustomerCategory.from_json(json)
# print the JSON string representation of the object
print(CustomerCategory.to_json())

# convert the object into a dict
customer_category_dict = customer_category_instance.to_dict()
# create an instance of CustomerCategory from a dict
customer_category_from_dict = CustomerCategory.from_dict(customer_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


