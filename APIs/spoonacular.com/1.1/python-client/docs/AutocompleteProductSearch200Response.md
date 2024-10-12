# AutocompleteProductSearch200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[AutocompleteMenuItemSearch200ResponseResultsInner]**](AutocompleteMenuItemSearch200ResponseResultsInner.md) |  | 

## Example

```python
from openapi_client.models.autocomplete_product_search200_response import AutocompleteProductSearch200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AutocompleteProductSearch200Response from a JSON string
autocomplete_product_search200_response_instance = AutocompleteProductSearch200Response.from_json(json)
# print the JSON string representation of the object
print(AutocompleteProductSearch200Response.to_json())

# convert the object into a dict
autocomplete_product_search200_response_dict = autocomplete_product_search200_response_instance.to_dict()
# create an instance of AutocompleteProductSearch200Response from a dict
autocomplete_product_search200_response_from_dict = AutocompleteProductSearch200Response.from_dict(autocomplete_product_search200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


