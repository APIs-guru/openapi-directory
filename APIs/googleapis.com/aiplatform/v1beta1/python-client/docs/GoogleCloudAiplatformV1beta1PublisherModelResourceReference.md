# GoogleCloudAiplatformV1beta1PublisherModelResourceReference

Reference to a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the resource. | [optional] 
**resource_name** | **str** | The resource name of the Google Cloud resource. | [optional] 
**uri** | **str** | The URI of the resource. | [optional] 
**use_case** | **str** | Use case (CUJ) of the resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_publisher_model_resource_reference import GoogleCloudAiplatformV1beta1PublisherModelResourceReference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PublisherModelResourceReference from a JSON string
google_cloud_aiplatform_v1beta1_publisher_model_resource_reference_instance = GoogleCloudAiplatformV1beta1PublisherModelResourceReference.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PublisherModelResourceReference.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_publisher_model_resource_reference_dict = google_cloud_aiplatform_v1beta1_publisher_model_resource_reference_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PublisherModelResourceReference from a dict
google_cloud_aiplatform_v1beta1_publisher_model_resource_reference_from_dict = GoogleCloudAiplatformV1beta1PublisherModelResourceReference.from_dict(google_cloud_aiplatform_v1beta1_publisher_model_resource_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


