# ProductFind200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**ProductFind200ResponseResult**](ProductFind200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_find200_response import ProductFind200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductFind200Response from a JSON string
product_find200_response_instance = ProductFind200Response.from_json(json)
# print the JSON string representation of the object
print(ProductFind200Response.to_json())

# convert the object into a dict
product_find200_response_dict = product_find200_response_instance.to_dict()
# create an instance of ProductFind200Response from a dict
product_find200_response_from_dict = ProductFind200Response.from_dict(product_find200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


