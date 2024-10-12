# GoogleCloudAiplatformV1beta1Retrieval

Defines a retrieval tool that model can call to access external knowledge.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_attribution** | **bool** | Optional. Disable using the result from this tool in detecting grounding attribution. This does not affect how the result is given to the model for generation. | [optional] 
**vertex_ai_search** | [**GoogleCloudAiplatformV1beta1VertexAISearch**](GoogleCloudAiplatformV1beta1VertexAISearch.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_retrieval import GoogleCloudAiplatformV1beta1Retrieval

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Retrieval from a JSON string
google_cloud_aiplatform_v1beta1_retrieval_instance = GoogleCloudAiplatformV1beta1Retrieval.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Retrieval.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_retrieval_dict = google_cloud_aiplatform_v1beta1_retrieval_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Retrieval from a dict
google_cloud_aiplatform_v1beta1_retrieval_from_dict = GoogleCloudAiplatformV1beta1Retrieval.from_dict(google_cloud_aiplatform_v1beta1_retrieval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


