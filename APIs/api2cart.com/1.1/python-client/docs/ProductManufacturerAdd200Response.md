# ProductManufacturerAdd200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**ProductManufacturerAdd200ResponseResult**](ProductManufacturerAdd200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_manufacturer_add200_response import ProductManufacturerAdd200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductManufacturerAdd200Response from a JSON string
product_manufacturer_add200_response_instance = ProductManufacturerAdd200Response.from_json(json)
# print the JSON string representation of the object
print(ProductManufacturerAdd200Response.to_json())

# convert the object into a dict
product_manufacturer_add200_response_dict = product_manufacturer_add200_response_instance.to_dict()
# create an instance of ProductManufacturerAdd200Response from a dict
product_manufacturer_add200_response_from_dict = ProductManufacturerAdd200Response.from_dict(product_manufacturer_add200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


