# ModelResponseProductList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**result** | [**ResponseProductListResult**](ResponseProductListResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.model_response_product_list import ModelResponseProductList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelResponseProductList from a JSON string
model_response_product_list_instance = ModelResponseProductList.from_json(json)
# print the JSON string representation of the object
print(ModelResponseProductList.to_json())

# convert the object into a dict
model_response_product_list_dict = model_response_product_list_instance.to_dict()
# create an instance of ModelResponseProductList from a dict
model_response_product_list_from_dict = ModelResponseProductList.from_dict(model_response_product_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


