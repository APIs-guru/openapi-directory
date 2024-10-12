# GoogleCloudAiplatformV1ExportDataConfig

Describes what part of the Dataset is to be exported, the destination of the export and how to export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_schema_uri** | **str** | The Cloud Storage URI that points to a YAML file describing the annotation schema. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/annotation/, note that the chosen schema must be consistent with metadata of the Dataset specified by dataset_id. Only used for custom training data export use cases. Only applicable to Datasets that have DataItems and Annotations. Only Annotations that both match this schema and belong to DataItems not ignored by the split method are used in respectively training, validation or test role, depending on the role of the DataItem they are on. When used in conjunction with annotations_filter, the Annotations used for training are filtered by both annotations_filter and annotation_schema_uri. | [optional] 
**annotations_filter** | **str** | An expression for filtering what part of the Dataset is to be exported. Only Annotations that match this filter will be exported. The filter syntax is the same as in ListAnnotations. | [optional] 
**export_use** | **str** | Indicates the usage of the exported files. | [optional] 
**filter_split** | [**GoogleCloudAiplatformV1ExportFilterSplit**](GoogleCloudAiplatformV1ExportFilterSplit.md) |  | [optional] 
**fraction_split** | [**GoogleCloudAiplatformV1ExportFractionSplit**](GoogleCloudAiplatformV1ExportFractionSplit.md) |  | [optional] 
**gcs_destination** | [**GoogleCloudAiplatformV1GcsDestination**](GoogleCloudAiplatformV1GcsDestination.md) |  | [optional] 
**saved_query_id** | **str** | The ID of a SavedQuery (annotation set) under the Dataset specified by dataset_id used for filtering Annotations for training. Only used for custom training data export use cases. Only applicable to Datasets that have SavedQueries. Only Annotations that are associated with this SavedQuery are used in respectively training. When used in conjunction with annotations_filter, the Annotations used for training are filtered by both saved_query_id and annotations_filter. Only one of saved_query_id and annotation_schema_uri should be specified as both of them represent the same thing: problem type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_export_data_config import GoogleCloudAiplatformV1ExportDataConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ExportDataConfig from a JSON string
google_cloud_aiplatform_v1_export_data_config_instance = GoogleCloudAiplatformV1ExportDataConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ExportDataConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_export_data_config_dict = google_cloud_aiplatform_v1_export_data_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ExportDataConfig from a dict
google_cloud_aiplatform_v1_export_data_config_from_dict = GoogleCloudAiplatformV1ExportDataConfig.from_dict(google_cloud_aiplatform_v1_export_data_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


