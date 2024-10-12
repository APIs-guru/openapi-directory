# CatalogDiff

Describes the difference between two Airbyte catalogs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transforms** | [**List[StreamTransform]**](StreamTransform.md) | list of stream transformations. order does not matter. | 

## Example

```python
from openapi_client.models.catalog_diff import CatalogDiff

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogDiff from a JSON string
catalog_diff_instance = CatalogDiff.from_json(json)
# print the JSON string representation of the object
print(CatalogDiff.to_json())

# convert the object into a dict
catalog_diff_dict = catalog_diff_instance.to_dict()
# create an instance of CatalogDiff from a dict
catalog_diff_from_dict = CatalogDiff.from_dict(catalog_diff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


