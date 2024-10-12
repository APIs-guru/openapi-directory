# ProductCount200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**ProductCount200ResponseResult**](ProductCount200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_count200_response import ProductCount200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCount200Response from a JSON string
product_count200_response_instance = ProductCount200Response.from_json(json)
# print the JSON string representation of the object
print(ProductCount200Response.to_json())

# convert the object into a dict
product_count200_response_dict = product_count200_response_instance.to_dict()
# create an instance of ProductCount200Response from a dict
product_count200_response_from_dict = ProductCount200Response.from_dict(product_count200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


