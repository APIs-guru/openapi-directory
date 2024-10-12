# GoogleCloudDataplexV1DataQualitySpecPostScanActions

The configuration of post scan actions of DataQualityScan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_export** | [**GoogleCloudDataplexV1DataQualitySpecPostScanActionsBigQueryExport**](GoogleCloudDataplexV1DataQualitySpecPostScanActionsBigQueryExport.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_spec_post_scan_actions import GoogleCloudDataplexV1DataQualitySpecPostScanActions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualitySpecPostScanActions from a JSON string
google_cloud_dataplex_v1_data_quality_spec_post_scan_actions_instance = GoogleCloudDataplexV1DataQualitySpecPostScanActions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualitySpecPostScanActions.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_spec_post_scan_actions_dict = google_cloud_dataplex_v1_data_quality_spec_post_scan_actions_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualitySpecPostScanActions from a dict
google_cloud_dataplex_v1_data_quality_spec_post_scan_actions_from_dict = GoogleCloudDataplexV1DataQualitySpecPostScanActions.from_dict(google_cloud_dataplex_v1_data_quality_spec_post_scan_actions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


