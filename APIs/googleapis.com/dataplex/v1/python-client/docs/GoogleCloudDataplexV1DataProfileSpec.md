# GoogleCloudDataplexV1DataProfileSpec

DataProfileScan related setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_fields** | [**GoogleCloudDataplexV1DataProfileSpecSelectedFields**](GoogleCloudDataplexV1DataProfileSpecSelectedFields.md) |  | [optional] 
**include_fields** | [**GoogleCloudDataplexV1DataProfileSpecSelectedFields**](GoogleCloudDataplexV1DataProfileSpecSelectedFields.md) |  | [optional] 
**post_scan_actions** | [**GoogleCloudDataplexV1DataProfileSpecPostScanActions**](GoogleCloudDataplexV1DataProfileSpecPostScanActions.md) |  | [optional] 
**row_filter** | **str** | Optional. A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 &gt;&#x3D; 0 AND col2 &lt; 10 | [optional] 
**sampling_percent** | **float** | Optional. The percentage of the records to be selected from the dataset for DataScan. Value can range between 0.0 and 100.0 with up to 3 significant decimal digits. Sampling is not applied if sampling_percent is not specified, 0 or 100. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_profile_spec import GoogleCloudDataplexV1DataProfileSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataProfileSpec from a JSON string
google_cloud_dataplex_v1_data_profile_spec_instance = GoogleCloudDataplexV1DataProfileSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataProfileSpec.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_profile_spec_dict = google_cloud_dataplex_v1_data_profile_spec_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataProfileSpec from a dict
google_cloud_dataplex_v1_data_profile_spec_from_dict = GoogleCloudDataplexV1DataProfileSpec.from_dict(google_cloud_dataplex_v1_data_profile_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


