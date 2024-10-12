# GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs

Applied configs for data profile type data scan job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_filter_applied** | **bool** | Boolean indicating whether a column filter was applied in the DataScan job. | [optional] 
**row_filter_applied** | **bool** | Boolean indicating whether a row filter was applied in the DataScan job. | [optional] 
**sampling_percent** | **float** | The percentage of the records selected from the dataset for DataScan. Value ranges between 0.0 and 100.0. Value 0.0 or 100.0 imply that sampling was not applied. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_scan_event_data_profile_applied_configs import GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs from a JSON string
google_cloud_dataplex_v1_data_scan_event_data_profile_applied_configs_instance = GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_scan_event_data_profile_applied_configs_dict = google_cloud_dataplex_v1_data_scan_event_data_profile_applied_configs_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs from a dict
google_cloud_dataplex_v1_data_scan_event_data_profile_applied_configs_from_dict = GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs.from_dict(google_cloud_dataplex_v1_data_scan_event_data_profile_applied_configs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


