# GoogleCloudDataplexV1DataScanEvent

These messages contain information about the execution of a datascan. The monitored resource is 'DataScan' Next ID: 13

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time when the data scan job was created. | [optional] 
**data_profile** | [**GoogleCloudDataplexV1DataScanEventDataProfileResult**](GoogleCloudDataplexV1DataScanEventDataProfileResult.md) |  | [optional] 
**data_profile_configs** | [**GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs**](GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs.md) |  | [optional] 
**data_quality** | [**GoogleCloudDataplexV1DataScanEventDataQualityResult**](GoogleCloudDataplexV1DataScanEventDataQualityResult.md) |  | [optional] 
**data_quality_configs** | [**GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs**](GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs.md) |  | [optional] 
**data_source** | **str** | The data source of the data scan | [optional] 
**end_time** | **str** | The time when the data scan job finished. | [optional] 
**job_id** | **str** | The identifier of the specific data scan job this log entry is for. | [optional] 
**message** | **str** | The message describing the data scan job event. | [optional] 
**post_scan_actions_result** | [**GoogleCloudDataplexV1DataScanEventPostScanActionsResult**](GoogleCloudDataplexV1DataScanEventPostScanActionsResult.md) |  | [optional] 
**scope** | **str** | The scope of the data scan (e.g. full, incremental). | [optional] 
**spec_version** | **str** | A version identifier of the spec which was used to execute this job. | [optional] 
**start_time** | **str** | The time when the data scan job started to run. | [optional] 
**state** | **str** | The status of the data scan job. | [optional] 
**trigger** | **str** | The trigger type of the data scan job. | [optional] 
**type** | **str** | The type of the data scan. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_scan_event import GoogleCloudDataplexV1DataScanEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataScanEvent from a JSON string
google_cloud_dataplex_v1_data_scan_event_instance = GoogleCloudDataplexV1DataScanEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataScanEvent.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_scan_event_dict = google_cloud_dataplex_v1_data_scan_event_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataScanEvent from a dict
google_cloud_dataplex_v1_data_scan_event_from_dict = GoogleCloudDataplexV1DataScanEvent.from_dict(google_cloud_dataplex_v1_data_scan_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


