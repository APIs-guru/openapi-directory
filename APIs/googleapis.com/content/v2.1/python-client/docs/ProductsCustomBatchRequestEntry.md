# ProductsCustomBatchRequestEntry

A batch entry encoding a single non-batch products request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | An entry ID, unique within the batch request. | [optional] 
**feed_id** | **str** | The Content API Supplemental Feed ID. If present then product insertion or deletion applies to a supplemental feed instead of primary Content API feed. | [optional] 
**merchant_id** | **str** | The ID of the managing account. | [optional] 
**method** | **str** | The method of the batch entry. Acceptable values are: - \&quot;&#x60;delete&#x60;\&quot; - \&quot;&#x60;get&#x60;\&quot; - \&quot;&#x60;insert&#x60;\&quot; - \&quot;&#x60;update&#x60;\&quot;  | [optional] 
**product** | [**Product**](Product.md) |  | [optional] 
**product_id** | **str** | The ID of the product to get or mutate. Only defined if the method is &#x60;get&#x60;, &#x60;delete&#x60;, or &#x60;update&#x60;. | [optional] 
**update_mask** | **str** | The comma-separated list of product attributes to be updated. Example: &#x60;\&quot;title,salePrice\&quot;&#x60;. Attributes specified in the update mask without a value specified in the body will be deleted from the product. *You must specify the update mask to delete attributes.* Only top-level product attributes can be updated. If not defined, product attributes with set values will be updated and other attributes will stay unchanged. Only defined if the method is &#x60;update&#x60;. | [optional] 

## Example

```python
from openapi_client.models.products_custom_batch_request_entry import ProductsCustomBatchRequestEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ProductsCustomBatchRequestEntry from a JSON string
products_custom_batch_request_entry_instance = ProductsCustomBatchRequestEntry.from_json(json)
# print the JSON string representation of the object
print(ProductsCustomBatchRequestEntry.to_json())

# convert the object into a dict
products_custom_batch_request_entry_dict = products_custom_batch_request_entry_instance.to_dict()
# create an instance of ProductsCustomBatchRequestEntry from a dict
products_custom_batch_request_entry_from_dict = ProductsCustomBatchRequestEntry.from_dict(products_custom_batch_request_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


