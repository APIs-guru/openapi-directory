# ProductInfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**Product**](Product.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_info200_response import ProductInfo200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductInfo200Response from a JSON string
product_info200_response_instance = ProductInfo200Response.from_json(json)
# print the JSON string representation of the object
print(ProductInfo200Response.to_json())

# convert the object into a dict
product_info200_response_dict = product_info200_response_instance.to_dict()
# create an instance of ProductInfo200Response from a dict
product_info200_response_from_dict = ProductInfo200Response.from_dict(product_info200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


