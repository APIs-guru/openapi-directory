# GoogleCloudAiplatformV1GroundingAttribution

Grounding attribution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_score** | **float** | Optional. Output only. Confidence score of the attribution. Ranges from 0 to 1. 1 is the most confident. | [optional] [readonly] 
**segment** | [**GoogleCloudAiplatformV1Segment**](GoogleCloudAiplatformV1Segment.md) |  | [optional] 
**web** | [**GoogleCloudAiplatformV1GroundingAttributionWeb**](GoogleCloudAiplatformV1GroundingAttributionWeb.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_grounding_attribution import GoogleCloudAiplatformV1GroundingAttribution

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1GroundingAttribution from a JSON string
google_cloud_aiplatform_v1_grounding_attribution_instance = GoogleCloudAiplatformV1GroundingAttribution.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1GroundingAttribution.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_grounding_attribution_dict = google_cloud_aiplatform_v1_grounding_attribution_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1GroundingAttribution from a dict
google_cloud_aiplatform_v1_grounding_attribution_from_dict = GoogleCloudAiplatformV1GroundingAttribution.from_dict(google_cloud_aiplatform_v1_grounding_attribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


