# GoogleCloudHealthcareV1beta1DicomBigQueryDestination

The BigQuery table where the server writes output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**force** | **bool** | Use &#x60;write_disposition&#x60; instead. If &#x60;write_disposition&#x60; is specified, this parameter is ignored. force&#x3D;false is equivalent to write_disposition&#x3D;WRITE_EMPTY and force&#x3D;true is equivalent to write_disposition&#x3D;WRITE_TRUNCATE. | [optional] 
**table_uri** | **str** | BigQuery URI to a table, up to 2000 characters long, in the format &#x60;bq://projectId.bqDatasetId.tableId&#x60; | [optional] 
**write_disposition** | **str** | Determines whether the existing table in the destination is to be overwritten or appended to. If a write_disposition is specified, the &#x60;force&#x60; parameter is ignored. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_healthcare_v1beta1_dicom_big_query_destination import GoogleCloudHealthcareV1beta1DicomBigQueryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudHealthcareV1beta1DicomBigQueryDestination from a JSON string
google_cloud_healthcare_v1beta1_dicom_big_query_destination_instance = GoogleCloudHealthcareV1beta1DicomBigQueryDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudHealthcareV1beta1DicomBigQueryDestination.to_json())

# convert the object into a dict
google_cloud_healthcare_v1beta1_dicom_big_query_destination_dict = google_cloud_healthcare_v1beta1_dicom_big_query_destination_instance.to_dict()
# create an instance of GoogleCloudHealthcareV1beta1DicomBigQueryDestination from a dict
google_cloud_healthcare_v1beta1_dicom_big_query_destination_from_dict = GoogleCloudHealthcareV1beta1DicomBigQueryDestination.from_dict(google_cloud_healthcare_v1beta1_dicom_big_query_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


