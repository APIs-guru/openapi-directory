# GoogleCloudAiplatformV1beta1PublisherModelParent

The information about the parent of a model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. The display name of the parent. E.g., LaMDA, T5, Vision API, Natural Language API. | [optional] 
**reference** | [**GoogleCloudAiplatformV1beta1PublisherModelResourceReference**](GoogleCloudAiplatformV1beta1PublisherModelResourceReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_publisher_model_parent import GoogleCloudAiplatformV1beta1PublisherModelParent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PublisherModelParent from a JSON string
google_cloud_aiplatform_v1beta1_publisher_model_parent_instance = GoogleCloudAiplatformV1beta1PublisherModelParent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PublisherModelParent.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_publisher_model_parent_dict = google_cloud_aiplatform_v1beta1_publisher_model_parent_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PublisherModelParent from a dict
google_cloud_aiplatform_v1beta1_publisher_model_parent_from_dict = GoogleCloudAiplatformV1beta1PublisherModelParent.from_dict(google_cloud_aiplatform_v1beta1_publisher_model_parent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


