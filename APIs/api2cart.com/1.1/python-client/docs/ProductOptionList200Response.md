# ProductOptionList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**ProductOptionList200ResponseResult**](ProductOptionList200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_option_list200_response import ProductOptionList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductOptionList200Response from a JSON string
product_option_list200_response_instance = ProductOptionList200Response.from_json(json)
# print the JSON string representation of the object
print(ProductOptionList200Response.to_json())

# convert the object into a dict
product_option_list200_response_dict = product_option_list200_response_instance.to_dict()
# create an instance of ProductOptionList200Response from a dict
product_option_list200_response_from_dict = ProductOptionList200Response.from_dict(product_option_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


