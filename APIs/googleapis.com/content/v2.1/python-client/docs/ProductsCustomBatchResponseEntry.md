# ProductsCustomBatchResponseEntry

A batch entry encoding a single non-batch products response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | The ID of the request entry this entry responds to. | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#productsCustomBatchResponseEntry&#x60;\&quot; | [optional] 
**product** | [**Product**](Product.md) |  | [optional] 

## Example

```python
from openapi_client.models.products_custom_batch_response_entry import ProductsCustomBatchResponseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ProductsCustomBatchResponseEntry from a JSON string
products_custom_batch_response_entry_instance = ProductsCustomBatchResponseEntry.from_json(json)
# print the JSON string representation of the object
print(ProductsCustomBatchResponseEntry.to_json())

# convert the object into a dict
products_custom_batch_response_entry_dict = products_custom_batch_response_entry_instance.to_dict()
# create an instance of ProductsCustomBatchResponseEntry from a dict
products_custom_batch_response_entry_from_dict = ProductsCustomBatchResponseEntry.from_dict(products_custom_batch_response_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


