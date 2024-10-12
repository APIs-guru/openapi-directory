# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassificationMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_milli_node_hours** | **str** | The actual training cost of creating this model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed inputs.budgetMilliNodeHours. | [optional] 
**successful_stop_reason** | **str** | For successful job completions, this is the reason why the job has finished. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_classification_metadata import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassificationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassificationMetadata from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_classification_metadata_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassificationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassificationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_classification_metadata_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_classification_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassificationMetadata from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_classification_metadata_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageClassificationMetadata.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_classification_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


