# GoogleCloudDatacatalogLineageV1Origin

Origin of a process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | If the source_type isn&#39;t CUSTOM, the value of this field should be a GCP resource name of the system, which reports lineage. The project and location parts of the resource name must match the project and location of the lineage resource being created. Examples: - &#x60;{source_type: COMPOSER, name: \&quot;projects/foo/locations/us/environments/bar\&quot;}&#x60; - &#x60;{source_type: BIGQUERY, name: \&quot;projects/foo/locations/eu\&quot;}&#x60; - &#x60;{source_type: CUSTOM, name: \&quot;myCustomIntegration\&quot;}&#x60; | [optional] 
**source_type** | **str** | Type of the source. Use of a source_type other than &#x60;CUSTOM&#x60; for process creation or updating is highly discouraged, and may be restricted in the future without notice. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_origin import GoogleCloudDatacatalogLineageV1Origin

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1Origin from a JSON string
google_cloud_datacatalog_lineage_v1_origin_instance = GoogleCloudDatacatalogLineageV1Origin.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1Origin.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_origin_dict = google_cloud_datacatalog_lineage_v1_origin_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1Origin from a dict
google_cloud_datacatalog_lineage_v1_origin_from_dict = GoogleCloudDatacatalogLineageV1Origin.from_dict(google_cloud_datacatalog_lineage_v1_origin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


