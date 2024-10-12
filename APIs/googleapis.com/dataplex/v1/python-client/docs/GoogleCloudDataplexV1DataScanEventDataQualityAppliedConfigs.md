# GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs

Applied configs for data quality type data scan job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**row_filter_applied** | **bool** | Boolean indicating whether a row filter was applied in the DataScan job. | [optional] 
**sampling_percent** | **float** | The percentage of the records selected from the dataset for DataScan. Value ranges between 0.0 and 100.0. Value 0.0 or 100.0 imply that sampling was not applied. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_scan_event_data_quality_applied_configs import GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs from a JSON string
google_cloud_dataplex_v1_data_scan_event_data_quality_applied_configs_instance = GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_scan_event_data_quality_applied_configs_dict = google_cloud_dataplex_v1_data_scan_event_data_quality_applied_configs_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs from a dict
google_cloud_dataplex_v1_data_scan_event_data_quality_applied_configs_from_dict = GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs.from_dict(google_cloud_dataplex_v1_data_scan_event_data_quality_applied_configs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


