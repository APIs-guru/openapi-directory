# GetProductInfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode_url** | **str** | The URL to the scannable barcode image. | [optional] 
**code_type** | **str** | The type of product code (UPC/EAN/ISBN). | [optional] 
**product** | [**GetProductInfo200ResponseProduct**](GetProductInfo200ResponseProduct.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_product_info200_response import GetProductInfo200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetProductInfo200Response from a JSON string
get_product_info200_response_instance = GetProductInfo200Response.from_json(json)
# print the JSON string representation of the object
print(GetProductInfo200Response.to_json())

# convert the object into a dict
get_product_info200_response_dict = get_product_info200_response_instance.to_dict()
# create an instance of GetProductInfo200Response from a dict
get_product_info200_response_from_dict = GetProductInfo200Response.from_dict(get_product_info200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


