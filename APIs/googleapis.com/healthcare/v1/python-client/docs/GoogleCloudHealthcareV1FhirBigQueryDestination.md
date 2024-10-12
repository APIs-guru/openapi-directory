# GoogleCloudHealthcareV1FhirBigQueryDestination

The configuration for exporting to BigQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_uri** | **str** | BigQuery URI to an existing dataset, up to 2000 characters long, in the format &#x60;bq://projectId.bqDatasetId&#x60;. | [optional] 
**force** | **bool** | If this flag is &#x60;TRUE&#x60;, all tables are deleted from the dataset before the new exported tables are written. If the flag is not set and the destination dataset contains tables, the export call returns an error. If &#x60;write_disposition&#x60; is specified, this parameter is ignored. force&#x3D;false is equivalent to write_disposition&#x3D;WRITE_EMPTY and force&#x3D;true is equivalent to write_disposition&#x3D;WRITE_TRUNCATE. | [optional] 
**schema_config** | [**SchemaConfig**](SchemaConfig.md) |  | [optional] 
**write_disposition** | **str** | Determines if existing data in the destination dataset is overwritten, appended to, or not written if the tables contain data. If a write_disposition is specified, the &#x60;force&#x60; parameter is ignored. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_healthcare_v1_fhir_big_query_destination import GoogleCloudHealthcareV1FhirBigQueryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudHealthcareV1FhirBigQueryDestination from a JSON string
google_cloud_healthcare_v1_fhir_big_query_destination_instance = GoogleCloudHealthcareV1FhirBigQueryDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudHealthcareV1FhirBigQueryDestination.to_json())

# convert the object into a dict
google_cloud_healthcare_v1_fhir_big_query_destination_dict = google_cloud_healthcare_v1_fhir_big_query_destination_instance.to_dict()
# create an instance of GoogleCloudHealthcareV1FhirBigQueryDestination from a dict
google_cloud_healthcare_v1_fhir_big_query_destination_from_dict = GoogleCloudHealthcareV1FhirBigQueryDestination.from_dict(google_cloud_healthcare_v1_fhir_big_query_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


