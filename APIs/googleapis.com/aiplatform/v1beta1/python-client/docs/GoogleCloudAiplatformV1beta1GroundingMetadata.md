# GoogleCloudAiplatformV1beta1GroundingMetadata

Metadata returned to client when grounding is enabled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grounding_attributions** | [**List[GoogleCloudAiplatformV1beta1GroundingAttribution]**](GoogleCloudAiplatformV1beta1GroundingAttribution.md) | Optional. List of grounding attributions. | [optional] 
**web_search_queries** | **List[str]** | Optional. Web search queries for the following-up web search. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_grounding_metadata import GoogleCloudAiplatformV1beta1GroundingMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1GroundingMetadata from a JSON string
google_cloud_aiplatform_v1beta1_grounding_metadata_instance = GoogleCloudAiplatformV1beta1GroundingMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1GroundingMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_grounding_metadata_dict = google_cloud_aiplatform_v1beta1_grounding_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1GroundingMetadata from a dict
google_cloud_aiplatform_v1beta1_grounding_metadata_from_dict = GoogleCloudAiplatformV1beta1GroundingMetadata.from_dict(google_cloud_aiplatform_v1beta1_grounding_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


