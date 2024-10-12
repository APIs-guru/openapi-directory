# GoogleCloudAiplatformV1SavedQuery

A SavedQuery is a view of the dataset. It references a subset of annotations by problem type and filters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_filter** | **str** | Output only. Filters on the Annotations in the dataset. | [optional] [readonly] 
**annotation_spec_count** | **int** | Output only. Number of AnnotationSpecs in the context of the SavedQuery. | [optional] [readonly] 
**create_time** | **str** | Output only. Timestamp when this SavedQuery was created. | [optional] [readonly] 
**display_name** | **str** | Required. The user-defined name of the SavedQuery. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**etag** | **str** | Used to perform a consistent read-modify-write update. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**metadata** | **object** | Some additional information about the SavedQuery. | [optional] 
**name** | **str** | Output only. Resource name of the SavedQuery. | [optional] [readonly] 
**problem_type** | **str** | Required. Problem type of the SavedQuery. Allowed values: * IMAGE_CLASSIFICATION_SINGLE_LABEL * IMAGE_CLASSIFICATION_MULTI_LABEL * IMAGE_BOUNDING_POLY * IMAGE_BOUNDING_BOX * TEXT_CLASSIFICATION_SINGLE_LABEL * TEXT_CLASSIFICATION_MULTI_LABEL * TEXT_EXTRACTION * TEXT_SENTIMENT * VIDEO_CLASSIFICATION * VIDEO_OBJECT_TRACKING | [optional] 
**support_automl_training** | **bool** | Output only. If the Annotations belonging to the SavedQuery can be used for AutoML training. | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when SavedQuery was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_saved_query import GoogleCloudAiplatformV1SavedQuery

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SavedQuery from a JSON string
google_cloud_aiplatform_v1_saved_query_instance = GoogleCloudAiplatformV1SavedQuery.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SavedQuery.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_saved_query_dict = google_cloud_aiplatform_v1_saved_query_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SavedQuery from a dict
google_cloud_aiplatform_v1_saved_query_from_dict = GoogleCloudAiplatformV1SavedQuery.from_dict(google_cloud_aiplatform_v1_saved_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


