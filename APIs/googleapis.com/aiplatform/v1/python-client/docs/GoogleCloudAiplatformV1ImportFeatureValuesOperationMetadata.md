# GoogleCloudAiplatformV1ImportFeatureValuesOperationMetadata

Details of operations that perform import Feature values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocking_operation_ids** | **List[str]** | List of ImportFeatureValues operations running under a single EntityType that are blocking this operation. | [optional] 
**generic_metadata** | [**GoogleCloudAiplatformV1GenericOperationMetadata**](GoogleCloudAiplatformV1GenericOperationMetadata.md) |  | [optional] 
**imported_entity_count** | **str** | Number of entities that have been imported by the operation. | [optional] 
**imported_feature_value_count** | **str** | Number of Feature values that have been imported by the operation. | [optional] 
**invalid_row_count** | **str** | The number of rows in input source that weren&#39;t imported due to either * Not having any featureValues. * Having a null entityId. * Having a null timestamp. * Not being parsable (applicable for CSV sources). | [optional] 
**source_uris** | **List[str]** | The source URI from where Feature values are imported. | [optional] 
**timestamp_outside_retention_rows_count** | **str** | The number rows that weren&#39;t ingested due to having timestamps outside the retention boundary. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_import_feature_values_operation_metadata import GoogleCloudAiplatformV1ImportFeatureValuesOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ImportFeatureValuesOperationMetadata from a JSON string
google_cloud_aiplatform_v1_import_feature_values_operation_metadata_instance = GoogleCloudAiplatformV1ImportFeatureValuesOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ImportFeatureValuesOperationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_import_feature_values_operation_metadata_dict = google_cloud_aiplatform_v1_import_feature_values_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ImportFeatureValuesOperationMetadata from a dict
google_cloud_aiplatform_v1_import_feature_values_operation_metadata_from_dict = GoogleCloudAiplatformV1ImportFeatureValuesOperationMetadata.from_dict(google_cloud_aiplatform_v1_import_feature_values_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


