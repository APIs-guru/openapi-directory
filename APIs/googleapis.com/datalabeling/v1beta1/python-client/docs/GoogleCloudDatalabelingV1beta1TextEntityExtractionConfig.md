# GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig

Config for text entity extraction human labeling task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_set** | **str** | Required. Annotation spec set resource name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_text_entity_extraction_config import GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig from a JSON string
google_cloud_datalabeling_v1beta1_text_entity_extraction_config_instance = GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_text_entity_extraction_config_dict = google_cloud_datalabeling_v1beta1_text_entity_extraction_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig from a dict
google_cloud_datalabeling_v1beta1_text_entity_extraction_config_from_dict = GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig.from_dict(google_cloud_datalabeling_v1beta1_text_entity_extraction_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


