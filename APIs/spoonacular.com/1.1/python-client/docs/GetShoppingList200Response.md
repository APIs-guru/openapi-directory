# GetShoppingList200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aisles** | [**List[GetShoppingList200ResponseAislesInner]**](GetShoppingList200ResponseAislesInner.md) |  | 
**cost** | **float** |  | 
**end_date** | **float** |  | 
**start_date** | **float** |  | 

## Example

```python
from openapi_client.models.get_shopping_list200_response import GetShoppingList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetShoppingList200Response from a JSON string
get_shopping_list200_response_instance = GetShoppingList200Response.from_json(json)
# print the JSON string representation of the object
print(GetShoppingList200Response.to_json())

# convert the object into a dict
get_shopping_list200_response_dict = get_shopping_list200_response_instance.to_dict()
# create an instance of GetShoppingList200Response from a dict
get_shopping_list200_response_from_dict = GetShoppingList200Response.from_dict(get_shopping_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


