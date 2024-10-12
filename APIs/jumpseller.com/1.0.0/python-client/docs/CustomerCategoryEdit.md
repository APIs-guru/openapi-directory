# CustomerCategoryEdit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**CustomerCategoryEditFields**](CustomerCategoryEditFields.md) |  | [optional] 

## Example

```python
from openapi_client.models.customer_category_edit import CustomerCategoryEdit

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerCategoryEdit from a JSON string
customer_category_edit_instance = CustomerCategoryEdit.from_json(json)
# print the JSON string representation of the object
print(CustomerCategoryEdit.to_json())

# convert the object into a dict
customer_category_edit_dict = customer_category_edit_instance.to_dict()
# create an instance of CustomerCategoryEdit from a dict
customer_category_edit_from_dict = CustomerCategoryEdit.from_dict(customer_category_edit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


