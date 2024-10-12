# GoogleCloudDatacatalogV1beta1InlineSource

Inline source used for taxonomies import.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxonomies** | [**List[GoogleCloudDatacatalogV1beta1SerializedTaxonomy]**](GoogleCloudDatacatalogV1beta1SerializedTaxonomy.md) | Required. Taxonomies to be imported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_inline_source import GoogleCloudDatacatalogV1beta1InlineSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1InlineSource from a JSON string
google_cloud_datacatalog_v1beta1_inline_source_instance = GoogleCloudDatacatalogV1beta1InlineSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1InlineSource.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_inline_source_dict = google_cloud_datacatalog_v1beta1_inline_source_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1InlineSource from a dict
google_cloud_datacatalog_v1beta1_inline_source_from_dict = GoogleCloudDatacatalogV1beta1InlineSource.from_dict(google_cloud_datacatalog_v1beta1_inline_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


