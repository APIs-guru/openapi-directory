# GoogleCloudAiplatformV1SchemaAnnotationSpecColor

An entry of mapping between color and AnnotationSpec. The mapping is used in segmentation mask.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**GoogleTypeColor**](GoogleTypeColor.md) |  | [optional] 
**display_name** | **str** | The display name of the AnnotationSpec represented by the color in the segmentation mask. | [optional] 
**id** | **str** | The ID of the AnnotationSpec represented by the color in the segmentation mask. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_annotation_spec_color import GoogleCloudAiplatformV1SchemaAnnotationSpecColor

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaAnnotationSpecColor from a JSON string
google_cloud_aiplatform_v1_schema_annotation_spec_color_instance = GoogleCloudAiplatformV1SchemaAnnotationSpecColor.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaAnnotationSpecColor.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_annotation_spec_color_dict = google_cloud_aiplatform_v1_schema_annotation_spec_color_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaAnnotationSpecColor from a dict
google_cloud_aiplatform_v1_schema_annotation_spec_color_from_dict = GoogleCloudAiplatformV1SchemaAnnotationSpecColor.from_dict(google_cloud_aiplatform_v1_schema_annotation_spec_color_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


