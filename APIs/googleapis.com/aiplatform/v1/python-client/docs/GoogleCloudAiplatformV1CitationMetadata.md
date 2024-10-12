# GoogleCloudAiplatformV1CitationMetadata

A collection of source attributions for a piece of content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**citations** | [**List[GoogleCloudAiplatformV1Citation]**](GoogleCloudAiplatformV1Citation.md) | Output only. List of citations. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_citation_metadata import GoogleCloudAiplatformV1CitationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1CitationMetadata from a JSON string
google_cloud_aiplatform_v1_citation_metadata_instance = GoogleCloudAiplatformV1CitationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1CitationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_citation_metadata_dict = google_cloud_aiplatform_v1_citation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1CitationMetadata from a dict
google_cloud_aiplatform_v1_citation_metadata_from_dict = GoogleCloudAiplatformV1CitationMetadata.from_dict(google_cloud_aiplatform_v1_citation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


