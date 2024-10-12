# GoogleCloudDataplexV1DataScan

Represents a user-visible job which provides the insights for the related data source.For example: Data Quality: generates queries based on the rules and runs against the data to get data quality check results. Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the scan was created. | [optional] [readonly] 
**data** | [**GoogleCloudDataplexV1DataSource**](GoogleCloudDataplexV1DataSource.md) |  | [optional] 
**data_profile_result** | [**GoogleCloudDataplexV1DataProfileResult**](GoogleCloudDataplexV1DataProfileResult.md) |  | [optional] 
**data_profile_spec** | [**GoogleCloudDataplexV1DataProfileSpec**](GoogleCloudDataplexV1DataProfileSpec.md) |  | [optional] 
**data_quality_result** | [**GoogleCloudDataplexV1DataQualityResult**](GoogleCloudDataplexV1DataQualityResult.md) |  | [optional] 
**data_quality_spec** | [**GoogleCloudDataplexV1DataQualitySpec**](GoogleCloudDataplexV1DataQualitySpec.md) |  | [optional] 
**description** | **str** | Optional. Description of the scan. Must be between 1-1024 characters. | [optional] 
**display_name** | **str** | Optional. User friendly display name. Must be between 1-256 characters. | [optional] 
**execution_spec** | [**GoogleCloudDataplexV1DataScanExecutionSpec**](GoogleCloudDataplexV1DataScanExecutionSpec.md) |  | [optional] 
**execution_status** | [**GoogleCloudDataplexV1DataScanExecutionStatus**](GoogleCloudDataplexV1DataScanExecutionStatus.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. User-defined labels for the scan. | [optional] 
**name** | **str** | Output only. The relative resource name of the scan, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}, where project refers to a project_id or project_number and location_id refers to a GCP region. | [optional] [readonly] 
**state** | **str** | Output only. Current state of the DataScan. | [optional] [readonly] 
**type** | **str** | Output only. The type of DataScan. | [optional] [readonly] 
**uid** | **str** | Output only. System generated globally unique ID for the scan. This ID will be different if the scan is deleted and re-created with the same name. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the scan was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_scan import GoogleCloudDataplexV1DataScan

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataScan from a JSON string
google_cloud_dataplex_v1_data_scan_instance = GoogleCloudDataplexV1DataScan.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataScan.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_scan_dict = google_cloud_dataplex_v1_data_scan_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataScan from a dict
google_cloud_dataplex_v1_data_scan_from_dict = GoogleCloudDataplexV1DataScan.from_dict(google_cloud_dataplex_v1_data_scan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


