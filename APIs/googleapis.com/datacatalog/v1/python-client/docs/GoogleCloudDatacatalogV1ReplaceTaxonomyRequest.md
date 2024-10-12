# GoogleCloudDatacatalogV1ReplaceTaxonomyRequest

Request message for ReplaceTaxonomy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serialized_taxonomy** | [**GoogleCloudDatacatalogV1SerializedTaxonomy**](GoogleCloudDatacatalogV1SerializedTaxonomy.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_replace_taxonomy_request import GoogleCloudDatacatalogV1ReplaceTaxonomyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ReplaceTaxonomyRequest from a JSON string
google_cloud_datacatalog_v1_replace_taxonomy_request_instance = GoogleCloudDatacatalogV1ReplaceTaxonomyRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ReplaceTaxonomyRequest.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_replace_taxonomy_request_dict = google_cloud_datacatalog_v1_replace_taxonomy_request_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ReplaceTaxonomyRequest from a dict
google_cloud_datacatalog_v1_replace_taxonomy_request_from_dict = GoogleCloudDatacatalogV1ReplaceTaxonomyRequest.from_dict(google_cloud_datacatalog_v1_replace_taxonomy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


