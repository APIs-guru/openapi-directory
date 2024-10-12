# GoogleCloudDatacatalogV1InlineSource

Inline source containing taxonomies to import.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxonomies** | [**List[GoogleCloudDatacatalogV1SerializedTaxonomy]**](GoogleCloudDatacatalogV1SerializedTaxonomy.md) | Required. Taxonomies to import. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_inline_source import GoogleCloudDatacatalogV1InlineSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1InlineSource from a JSON string
google_cloud_datacatalog_v1_inline_source_instance = GoogleCloudDatacatalogV1InlineSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1InlineSource.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_inline_source_dict = google_cloud_datacatalog_v1_inline_source_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1InlineSource from a dict
google_cloud_datacatalog_v1_inline_source_from_dict = GoogleCloudDatacatalogV1InlineSource.from_dict(google_cloud_datacatalog_v1_inline_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


