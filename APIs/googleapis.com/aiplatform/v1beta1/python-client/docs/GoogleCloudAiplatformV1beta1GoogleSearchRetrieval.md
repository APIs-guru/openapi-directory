# GoogleCloudAiplatformV1beta1GoogleSearchRetrieval

Tool to retrieve public web data for grounding, powered by Google.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_attribution** | **bool** | Optional. Disable using the result from this tool in detecting grounding attribution. This does not affect how the result is given to the model for generation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_google_search_retrieval import GoogleCloudAiplatformV1beta1GoogleSearchRetrieval

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1GoogleSearchRetrieval from a JSON string
google_cloud_aiplatform_v1beta1_google_search_retrieval_instance = GoogleCloudAiplatformV1beta1GoogleSearchRetrieval.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1GoogleSearchRetrieval.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_google_search_retrieval_dict = google_cloud_aiplatform_v1beta1_google_search_retrieval_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1GoogleSearchRetrieval from a dict
google_cloud_aiplatform_v1beta1_google_search_retrieval_from_dict = GoogleCloudAiplatformV1beta1GoogleSearchRetrieval.from_dict(google_cloud_aiplatform_v1beta1_google_search_retrieval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


