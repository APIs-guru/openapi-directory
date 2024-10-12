# ProductAdd200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**ProductAdd200ResponseResult**](ProductAdd200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_add200_response import ProductAdd200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAdd200Response from a JSON string
product_add200_response_instance = ProductAdd200Response.from_json(json)
# print the JSON string representation of the object
print(ProductAdd200Response.to_json())

# convert the object into a dict
product_add200_response_dict = product_add200_response_instance.to_dict()
# create an instance of ProductAdd200Response from a dict
product_add200_response_from_dict = ProductAdd200Response.from_dict(product_add200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


