# GeoTaxonomy

Encapsulates the geographic taxonomy data for a sku.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regions** | **List[str]** | The list of regions associated with a sku. Empty for Global skus, which are associated with all Google Cloud regions. | [optional] 
**type** | **str** | The type of Geo Taxonomy: GLOBAL, REGIONAL, or MULTI_REGIONAL. | [optional] 

## Example

```python
from openapi_client.models.geo_taxonomy import GeoTaxonomy

# TODO update the JSON string below
json = "{}"
# create an instance of GeoTaxonomy from a JSON string
geo_taxonomy_instance = GeoTaxonomy.from_json(json)
# print the JSON string representation of the object
print(GeoTaxonomy.to_json())

# convert the object into a dict
geo_taxonomy_dict = geo_taxonomy_instance.to_dict()
# create an instance of GeoTaxonomy from a dict
geo_taxonomy_from_dict = GeoTaxonomy.from_dict(geo_taxonomy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


