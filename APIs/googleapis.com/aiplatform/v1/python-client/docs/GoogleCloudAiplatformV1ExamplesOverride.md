# GoogleCloudAiplatformV1ExamplesOverride

Overrides for example-based explanations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crowding_count** | **int** | The number of neighbors to return that have the same crowding tag. | [optional] 
**data_format** | **str** | The format of the data being provided with each call. | [optional] 
**neighbor_count** | **int** | The number of neighbors to return. | [optional] 
**restrictions** | [**List[GoogleCloudAiplatformV1ExamplesRestrictionsNamespace]**](GoogleCloudAiplatformV1ExamplesRestrictionsNamespace.md) | Restrict the resulting nearest neighbors to respect these constraints. | [optional] 
**return_embeddings** | **bool** | If true, return the embeddings instead of neighbors. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_examples_override import GoogleCloudAiplatformV1ExamplesOverride

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ExamplesOverride from a JSON string
google_cloud_aiplatform_v1_examples_override_instance = GoogleCloudAiplatformV1ExamplesOverride.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ExamplesOverride.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_examples_override_dict = google_cloud_aiplatform_v1_examples_override_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ExamplesOverride from a dict
google_cloud_aiplatform_v1_examples_override_from_dict = GoogleCloudAiplatformV1ExamplesOverride.from_dict(google_cloud_aiplatform_v1_examples_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


