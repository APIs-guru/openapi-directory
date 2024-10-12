# CustomerCategoryFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code of the CustomerCategory | [optional] 
**id** | **int** | Unique identifier of the CustomerCategory | [optional] 
**name** | **str** | Name of the CustomerCategory | [optional] 

## Example

```python
from openapi_client.models.customer_category_fields import CustomerCategoryFields

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerCategoryFields from a JSON string
customer_category_fields_instance = CustomerCategoryFields.from_json(json)
# print the JSON string representation of the object
print(CustomerCategoryFields.to_json())

# convert the object into a dict
customer_category_fields_dict = customer_category_fields_instance.to_dict()
# create an instance of CustomerCategoryFields from a dict
customer_category_fields_from_dict = CustomerCategoryFields.from_dict(customer_category_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


