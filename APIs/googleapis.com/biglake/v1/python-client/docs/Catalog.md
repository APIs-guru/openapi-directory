# Catalog

Catalog is the container of databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The creation time of the catalog. | [optional] [readonly] 
**delete_time** | **str** | Output only. The deletion time of the catalog. Only set after the catalog is deleted. | [optional] [readonly] 
**expire_time** | **str** | Output only. The time when this catalog is considered expired. Only set after the catalog is deleted. | [optional] [readonly] 
**name** | **str** | Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id} | [optional] [readonly] 
**update_time** | **str** | Output only. The last modification time of the catalog. | [optional] [readonly] 

## Example

```python
from openapi_client.models.catalog import Catalog

# TODO update the JSON string below
json = "{}"
# create an instance of Catalog from a JSON string
catalog_instance = Catalog.from_json(json)
# print the JSON string representation of the object
print(Catalog.to_json())

# convert the object into a dict
catalog_dict = catalog_instance.to_dict()
# create an instance of Catalog from a dict
catalog_from_dict = Catalog.from_dict(catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


