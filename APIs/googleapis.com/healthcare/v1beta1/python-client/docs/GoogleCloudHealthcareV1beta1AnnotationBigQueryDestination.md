# GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination

The BigQuery table for export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**force** | **bool** | Use &#x60;write_disposition&#x60; instead. If &#x60;write_disposition&#x60; is specified, this parameter is ignored. force&#x3D;false is equivalent to write_disposition&#x3D;WRITE_EMPTY and force&#x3D;true is equivalent to write_disposition&#x3D;WRITE_TRUNCATE. | [optional] 
**schema_type** | **str** | Specifies the schema format to export. | [optional] 
**table_uri** | **str** | BigQuery URI to a table, up to 2000 characters long, must be of the form bq://projectId.bqDatasetId.tableId. | [optional] 
**write_disposition** | **str** | Determines if existing data in the destination dataset is overwritten, appended to, or not written if the tables contain data. If a write_disposition is specified, the &#x60;force&#x60; parameter is ignored. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_healthcare_v1beta1_annotation_big_query_destination import GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination from a JSON string
google_cloud_healthcare_v1beta1_annotation_big_query_destination_instance = GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination.to_json())

# convert the object into a dict
google_cloud_healthcare_v1beta1_annotation_big_query_destination_dict = google_cloud_healthcare_v1beta1_annotation_big_query_destination_instance.to_dict()
# create an instance of GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination from a dict
google_cloud_healthcare_v1beta1_annotation_big_query_destination_from_dict = GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination.from_dict(google_cloud_healthcare_v1beta1_annotation_big_query_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


