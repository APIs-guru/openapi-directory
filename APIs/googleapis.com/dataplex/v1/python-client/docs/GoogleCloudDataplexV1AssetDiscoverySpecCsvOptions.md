# GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions

Describe CSV and similar semi-structured data formats.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delimiter** | **str** | Optional. The delimiter being used to separate values. This defaults to &#39;,&#39;. | [optional] 
**disable_type_inference** | **bool** | Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings. | [optional] 
**encoding** | **str** | Optional. The character encoding of the data. The default is UTF-8. | [optional] 
**header_rows** | **int** | Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_asset_discovery_spec_csv_options import GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions from a JSON string
google_cloud_dataplex_v1_asset_discovery_spec_csv_options_instance = GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_asset_discovery_spec_csv_options_dict = google_cloud_dataplex_v1_asset_discovery_spec_csv_options_instance.to_dict()
# create an instance of GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions from a dict
google_cloud_dataplex_v1_asset_discovery_spec_csv_options_from_dict = GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions.from_dict(google_cloud_dataplex_v1_asset_discovery_spec_csv_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


