# ProductsCustomBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[ProductsCustomBatchRequestEntry]**](ProductsCustomBatchRequestEntry.md) | The request entries to be processed in the batch. | [optional] 

## Example

```python
from openapi_client.models.products_custom_batch_request import ProductsCustomBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProductsCustomBatchRequest from a JSON string
products_custom_batch_request_instance = ProductsCustomBatchRequest.from_json(json)
# print the JSON string representation of the object
print(ProductsCustomBatchRequest.to_json())

# convert the object into a dict
products_custom_batch_request_dict = products_custom_batch_request_instance.to_dict()
# create an instance of ProductsCustomBatchRequest from a dict
products_custom_batch_request_from_dict = ProductsCustomBatchRequest.from_dict(products_custom_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


