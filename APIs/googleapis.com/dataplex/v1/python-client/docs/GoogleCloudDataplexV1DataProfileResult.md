# GoogleCloudDataplexV1DataProfileResult

DataProfileResult defines the output of DataProfileScan. Each field of the table will have field type specific profile result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**post_scan_actions_result** | [**GoogleCloudDataplexV1DataProfileResultPostScanActionsResult**](GoogleCloudDataplexV1DataProfileResultPostScanActionsResult.md) |  | [optional] 
**profile** | [**GoogleCloudDataplexV1DataProfileResultProfile**](GoogleCloudDataplexV1DataProfileResultProfile.md) |  | [optional] 
**row_count** | **str** | The count of rows scanned. | [optional] 
**scanned_data** | [**GoogleCloudDataplexV1ScannedData**](GoogleCloudDataplexV1ScannedData.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_profile_result import GoogleCloudDataplexV1DataProfileResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataProfileResult from a JSON string
google_cloud_dataplex_v1_data_profile_result_instance = GoogleCloudDataplexV1DataProfileResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataProfileResult.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_profile_result_dict = google_cloud_dataplex_v1_data_profile_result_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataProfileResult from a dict
google_cloud_dataplex_v1_data_profile_result_from_dict = GoogleCloudDataplexV1DataProfileResult.from_dict(google_cloud_dataplex_v1_data_profile_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


