# GoogleCloudAiplatformV1beta1Examples

Example-based explainability that returns the nearest neighbors from the provided dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**example_gcs_source** | [**GoogleCloudAiplatformV1beta1ExamplesExampleGcsSource**](GoogleCloudAiplatformV1beta1ExamplesExampleGcsSource.md) |  | [optional] 
**gcs_source** | [**GoogleCloudAiplatformV1beta1GcsSource**](GoogleCloudAiplatformV1beta1GcsSource.md) |  | [optional] 
**nearest_neighbor_search_config** | **object** | The full configuration for the generated index, the semantics are the same as metadata and should match [NearestNeighborSearchConfig](https://cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-example-based#nearest-neighbor-search-config). | [optional] 
**neighbor_count** | **int** | The number of neighbors to return when querying for examples. | [optional] 
**presets** | [**GoogleCloudAiplatformV1beta1Presets**](GoogleCloudAiplatformV1beta1Presets.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_examples import GoogleCloudAiplatformV1beta1Examples

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Examples from a JSON string
google_cloud_aiplatform_v1beta1_examples_instance = GoogleCloudAiplatformV1beta1Examples.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Examples.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_examples_dict = google_cloud_aiplatform_v1beta1_examples_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Examples from a dict
google_cloud_aiplatform_v1beta1_examples_from_dict = GoogleCloudAiplatformV1beta1Examples.from_dict(google_cloud_aiplatform_v1beta1_examples_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


