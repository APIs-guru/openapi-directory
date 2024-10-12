# ProductsCustomBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[ProductsCustomBatchResponseEntry]**](ProductsCustomBatchResponseEntry.md) | The result of the execution of the batch requests. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#productsCustomBatchResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.products_custom_batch_response import ProductsCustomBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProductsCustomBatchResponse from a JSON string
products_custom_batch_response_instance = ProductsCustomBatchResponse.from_json(json)
# print the JSON string representation of the object
print(ProductsCustomBatchResponse.to_json())

# convert the object into a dict
products_custom_batch_response_dict = products_custom_batch_response_instance.to_dict()
# create an instance of ProductsCustomBatchResponse from a dict
products_custom_batch_response_from_dict = ProductsCustomBatchResponse.from_dict(products_custom_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


