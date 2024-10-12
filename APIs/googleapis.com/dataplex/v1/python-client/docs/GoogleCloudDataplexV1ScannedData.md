# GoogleCloudDataplexV1ScannedData

The data scanned during processing (e.g. in incremental DataScan)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incremental_field** | [**GoogleCloudDataplexV1ScannedDataIncrementalField**](GoogleCloudDataplexV1ScannedDataIncrementalField.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_scanned_data import GoogleCloudDataplexV1ScannedData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ScannedData from a JSON string
google_cloud_dataplex_v1_scanned_data_instance = GoogleCloudDataplexV1ScannedData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ScannedData.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_scanned_data_dict = google_cloud_dataplex_v1_scanned_data_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ScannedData from a dict
google_cloud_dataplex_v1_scanned_data_from_dict = GoogleCloudDataplexV1ScannedData.from_dict(google_cloud_dataplex_v1_scanned_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


