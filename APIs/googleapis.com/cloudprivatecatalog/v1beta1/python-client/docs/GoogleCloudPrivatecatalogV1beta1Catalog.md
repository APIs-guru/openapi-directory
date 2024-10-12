# GoogleCloudPrivatecatalogV1beta1Catalog

The readonly representation of a catalog computed with a given resource context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the catalog was created. | [optional] 
**description** | **str** | Output only. The description of the catalog. | [optional] 
**display_name** | **str** | Output only. The descriptive name of the catalog as it appears in UIs. | [optional] 
**name** | **str** | Output only. The resource name of the target catalog, in the format of &#x60;catalogs/{catalog_id}&#39;. | [optional] 
**update_time** | **str** | Output only. The time when the catalog was last updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_privatecatalog_v1beta1_catalog import GoogleCloudPrivatecatalogV1beta1Catalog

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPrivatecatalogV1beta1Catalog from a JSON string
google_cloud_privatecatalog_v1beta1_catalog_instance = GoogleCloudPrivatecatalogV1beta1Catalog.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPrivatecatalogV1beta1Catalog.to_json())

# convert the object into a dict
google_cloud_privatecatalog_v1beta1_catalog_dict = google_cloud_privatecatalog_v1beta1_catalog_instance.to_dict()
# create an instance of GoogleCloudPrivatecatalogV1beta1Catalog from a dict
google_cloud_privatecatalog_v1beta1_catalog_from_dict = GoogleCloudPrivatecatalogV1beta1Catalog.from_dict(google_cloud_privatecatalog_v1beta1_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


