# GoogleCloudDiscoveryengineV1alphaGcsSource

Cloud Storage location for input content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_schema** | **str** | The schema to use when parsing the data from the source. Supported values for document imports: * &#x60;document&#x60; (default): One JSON Document per line. Each document must have a valid Document.id. * &#x60;content&#x60;: Unstructured data (e.g. PDF, HTML). Each file matched by &#x60;input_uris&#x60; becomes a document, with the ID set to the first 128 bits of SHA256(URI) encoded as a hex string. * &#x60;custom&#x60;: One custom data JSON per row in arbitrary format that conforms to the defined Schema of the data store. This can only be used by Gen App Builder. * &#x60;csv&#x60;: A CSV file with header conforming to the defined Schema of the data store. Each entry after the header is imported as a Document. This can only be used by Gen App Builder. Supported values for user even imports: * &#x60;user_event&#x60; (default): One JSON UserEvent per line. | [optional] 
**input_uris** | **List[str]** | Required. Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, &#x60;gs://bucket/directory/object.json&#x60;) or a pattern matching one or more files, such as &#x60;gs://bucket/directory/*.json&#x60;. A request can contain at most 100 files (or 100,000 files if &#x60;data_schema&#x60; is &#x60;content&#x60;). Each file can be up to 2 GB (or 100 MB if &#x60;data_schema&#x60; is &#x60;content&#x60;). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_gcs_source import GoogleCloudDiscoveryengineV1alphaGcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaGcsSource from a JSON string
google_cloud_discoveryengine_v1alpha_gcs_source_instance = GoogleCloudDiscoveryengineV1alphaGcsSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaGcsSource.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_gcs_source_dict = google_cloud_discoveryengine_v1alpha_gcs_source_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaGcsSource from a dict
google_cloud_discoveryengine_v1alpha_gcs_source_from_dict = GoogleCloudDiscoveryengineV1alphaGcsSource.from_dict(google_cloud_discoveryengine_v1alpha_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


