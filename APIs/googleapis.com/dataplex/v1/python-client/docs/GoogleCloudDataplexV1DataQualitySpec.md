# GoogleCloudDataplexV1DataQualitySpec

DataQualityScan related setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**post_scan_actions** | [**GoogleCloudDataplexV1DataQualitySpecPostScanActions**](GoogleCloudDataplexV1DataQualitySpecPostScanActions.md) |  | [optional] 
**row_filter** | **str** | Optional. A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 &gt;&#x3D; 0 AND col2 &lt; 10 | [optional] 
**rules** | [**List[GoogleCloudDataplexV1DataQualityRule]**](GoogleCloudDataplexV1DataQualityRule.md) | Required. The list of rules to evaluate against a data source. At least one rule is required. | [optional] 
**sampling_percent** | **float** | Optional. The percentage of the records to be selected from the dataset for DataScan. Value can range between 0.0 and 100.0 with up to 3 significant decimal digits. Sampling is not applied if sampling_percent is not specified, 0 or 100. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_spec import GoogleCloudDataplexV1DataQualitySpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualitySpec from a JSON string
google_cloud_dataplex_v1_data_quality_spec_instance = GoogleCloudDataplexV1DataQualitySpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualitySpec.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_spec_dict = google_cloud_dataplex_v1_data_quality_spec_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualitySpec from a dict
google_cloud_dataplex_v1_data_quality_spec_from_dict = GoogleCloudDataplexV1DataQualitySpec.from_dict(google_cloud_dataplex_v1_data_quality_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


