# ProductUuids


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**AssetFamiliesAllOfLinks**](AssetFamiliesAllOfLinks.md) |  | [optional] 
**embedded** | [**ProductsAllOfEmbedded**](ProductsAllOfEmbedded.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_uuids import ProductUuids

# TODO update the JSON string below
json = "{}"
# create an instance of ProductUuids from a JSON string
product_uuids_instance = ProductUuids.from_json(json)
# print the JSON string representation of the object
print(ProductUuids.to_json())

# convert the object into a dict
product_uuids_dict = product_uuids_instance.to_dict()
# create an instance of ProductUuids from a dict
product_uuids_from_dict = ProductUuids.from_dict(product_uuids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


