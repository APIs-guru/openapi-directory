# API2GroceryListDepartmentResult



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dept** | **str** | Gets or sets the dept. | [optional] 
**item** | **str** | Gets or sets the item. | [optional] 

## Example

```python
from openapi_client.models.api2_grocery_list_department_result import API2GroceryListDepartmentResult

# TODO update the JSON string below
json = "{}"
# create an instance of API2GroceryListDepartmentResult from a JSON string
api2_grocery_list_department_result_instance = API2GroceryListDepartmentResult.from_json(json)
# print the JSON string representation of the object
print(API2GroceryListDepartmentResult.to_json())

# convert the object into a dict
api2_grocery_list_department_result_dict = api2_grocery_list_department_result_instance.to_dict()
# create an instance of API2GroceryListDepartmentResult from a dict
api2_grocery_list_department_result_from_dict = API2GroceryListDepartmentResult.from_dict(api2_grocery_list_department_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


