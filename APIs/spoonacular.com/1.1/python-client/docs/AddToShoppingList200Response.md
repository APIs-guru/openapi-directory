# AddToShoppingList200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aisles** | [**List[GetShoppingList200ResponseAislesInner]**](GetShoppingList200ResponseAislesInner.md) |  | 
**cost** | **float** |  | 
**end_date** | **float** |  | 
**start_date** | **float** |  | 

## Example

```python
from openapi_client.models.add_to_shopping_list200_response import AddToShoppingList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AddToShoppingList200Response from a JSON string
add_to_shopping_list200_response_instance = AddToShoppingList200Response.from_json(json)
# print the JSON string representation of the object
print(AddToShoppingList200Response.to_json())

# convert the object into a dict
add_to_shopping_list200_response_dict = add_to_shopping_list200_response_instance.to_dict()
# create an instance of AddToShoppingList200Response from a dict
add_to_shopping_list200_response_from_dict = AddToShoppingList200Response.from_dict(add_to_shopping_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


