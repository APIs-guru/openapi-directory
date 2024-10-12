# GoogleCloudDataplexV1DataScanExecutionSpec

DataScan execution settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** | Immutable. The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.If not specified, a data scan will run for all data in the table. | [optional] 
**trigger** | [**GoogleCloudDataplexV1Trigger**](GoogleCloudDataplexV1Trigger.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_scan_execution_spec import GoogleCloudDataplexV1DataScanExecutionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataScanExecutionSpec from a JSON string
google_cloud_dataplex_v1_data_scan_execution_spec_instance = GoogleCloudDataplexV1DataScanExecutionSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataScanExecutionSpec.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_scan_execution_spec_dict = google_cloud_dataplex_v1_data_scan_execution_spec_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataScanExecutionSpec from a dict
google_cloud_dataplex_v1_data_scan_execution_spec_from_dict = GoogleCloudDataplexV1DataScanExecutionSpec.from_dict(google_cloud_dataplex_v1_data_scan_execution_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


