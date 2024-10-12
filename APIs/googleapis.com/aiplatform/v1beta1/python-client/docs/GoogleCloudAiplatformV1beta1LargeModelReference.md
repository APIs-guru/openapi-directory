# GoogleCloudAiplatformV1beta1LargeModelReference

Contains information about the Large Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The unique name of the large Foundation or pre-built model. Like \&quot;chat-bison\&quot;, \&quot;text-bison\&quot;. Or model name with version ID, like \&quot;chat-bison@001\&quot;, \&quot;text-bison@005\&quot;, etc. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_large_model_reference import GoogleCloudAiplatformV1beta1LargeModelReference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1LargeModelReference from a JSON string
google_cloud_aiplatform_v1beta1_large_model_reference_instance = GoogleCloudAiplatformV1beta1LargeModelReference.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1LargeModelReference.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_large_model_reference_dict = google_cloud_aiplatform_v1beta1_large_model_reference_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1LargeModelReference from a dict
google_cloud_aiplatform_v1beta1_large_model_reference_from_dict = GoogleCloudAiplatformV1beta1LargeModelReference.from_dict(google_cloud_aiplatform_v1beta1_large_model_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


