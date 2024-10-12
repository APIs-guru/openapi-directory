# GoogleCloudAiplatformV1ExamplesExampleGcsSource

The Cloud Storage input instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_format** | **str** | The format in which instances are given, if not specified, assume it&#39;s JSONL format. Currently only JSONL format is supported. | [optional] 
**gcs_source** | [**GoogleCloudAiplatformV1GcsSource**](GoogleCloudAiplatformV1GcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_examples_example_gcs_source import GoogleCloudAiplatformV1ExamplesExampleGcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ExamplesExampleGcsSource from a JSON string
google_cloud_aiplatform_v1_examples_example_gcs_source_instance = GoogleCloudAiplatformV1ExamplesExampleGcsSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ExamplesExampleGcsSource.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_examples_example_gcs_source_dict = google_cloud_aiplatform_v1_examples_example_gcs_source_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ExamplesExampleGcsSource from a dict
google_cloud_aiplatform_v1_examples_example_gcs_source_from_dict = GoogleCloudAiplatformV1ExamplesExampleGcsSource.from_dict(google_cloud_aiplatform_v1_examples_example_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


