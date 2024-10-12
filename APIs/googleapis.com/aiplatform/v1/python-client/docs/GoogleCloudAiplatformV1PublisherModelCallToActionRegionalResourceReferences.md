# GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences

The regional resource name or the URI. Key is region, e.g., us-central1, europe-west2, global, etc..

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**references** | [**Dict[str, GoogleCloudAiplatformV1PublisherModelResourceReference]**](GoogleCloudAiplatformV1PublisherModelResourceReference.md) | Required. | [optional] 
**resource_description** | **str** | Optional. Description of the resource. | [optional] 
**resource_title** | **str** | Optional. Title of the resource. | [optional] 
**resource_use_case** | **str** | Optional. Use case (CUJ) of the resource. | [optional] 
**title** | **str** | Required.  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_publisher_model_call_to_action_regional_resource_references import GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences from a JSON string
google_cloud_aiplatform_v1_publisher_model_call_to_action_regional_resource_references_instance = GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_publisher_model_call_to_action_regional_resource_references_dict = google_cloud_aiplatform_v1_publisher_model_call_to_action_regional_resource_references_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences from a dict
google_cloud_aiplatform_v1_publisher_model_call_to_action_regional_resource_references_from_dict = GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences.from_dict(google_cloud_aiplatform_v1_publisher_model_call_to_action_regional_resource_references_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


