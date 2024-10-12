# GetProductsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EcommerceProduct]**](EcommerceProduct.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_products_response import GetProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetProductsResponse from a JSON string
get_products_response_instance = GetProductsResponse.from_json(json)
# print the JSON string representation of the object
print(GetProductsResponse.to_json())

# convert the object into a dict
get_products_response_dict = get_products_response_instance.to_dict()
# create an instance of GetProductsResponse from a dict
get_products_response_from_dict = GetProductsResponse.from_dict(get_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


