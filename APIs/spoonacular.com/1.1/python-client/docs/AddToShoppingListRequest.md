# AddToShoppingListRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aisle** | **str** |  | 
**item** | **str** |  | 
**parse** | **bool** |  | 

## Example

```python
from openapi_client.models.add_to_shopping_list_request import AddToShoppingListRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddToShoppingListRequest from a JSON string
add_to_shopping_list_request_instance = AddToShoppingListRequest.from_json(json)
# print the JSON string representation of the object
print(AddToShoppingListRequest.to_json())

# convert the object into a dict
add_to_shopping_list_request_dict = add_to_shopping_list_request_instance.to_dict()
# create an instance of AddToShoppingListRequest from a dict
add_to_shopping_list_request_from_dict = AddToShoppingListRequest.from_dict(add_to_shopping_list_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


