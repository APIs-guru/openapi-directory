# ProductCollection

Paged Products list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ProductContract]**](ProductContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.product_collection import ProductCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCollection from a JSON string
product_collection_instance = ProductCollection.from_json(json)
# print the JSON string representation of the object
print(ProductCollection.to_json())

# convert the object into a dict
product_collection_dict = product_collection_instance.to_dict()
# create an instance of ProductCollection from a dict
product_collection_from_dict = ProductCollection.from_dict(product_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


