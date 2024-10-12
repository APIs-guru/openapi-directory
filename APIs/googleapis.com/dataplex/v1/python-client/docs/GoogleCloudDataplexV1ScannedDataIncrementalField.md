# GoogleCloudDataplexV1ScannedDataIncrementalField

A data range denoted by a pair of start/end values of a field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | Value that marks the end of the range. | [optional] 
**var_field** | **str** | The field that contains values which monotonically increases over time (e.g. a timestamp column). | [optional] 
**start** | **str** | Value that marks the start of the range. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_scanned_data_incremental_field import GoogleCloudDataplexV1ScannedDataIncrementalField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ScannedDataIncrementalField from a JSON string
google_cloud_dataplex_v1_scanned_data_incremental_field_instance = GoogleCloudDataplexV1ScannedDataIncrementalField.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ScannedDataIncrementalField.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_scanned_data_incremental_field_dict = google_cloud_dataplex_v1_scanned_data_incremental_field_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ScannedDataIncrementalField from a dict
google_cloud_dataplex_v1_scanned_data_incremental_field_from_dict = GoogleCloudDataplexV1ScannedDataIncrementalField.from_dict(google_cloud_dataplex_v1_scanned_data_incremental_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


