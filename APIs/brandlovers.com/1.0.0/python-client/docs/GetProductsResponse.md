# GetProductsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**List[Metadata]**](Metadata.md) | Payload with response | [optional] 
**skus** | [**List[GetProduct]**](GetProduct.md) |  | [optional] 

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


