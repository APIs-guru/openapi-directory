# GoogleCloudDataplexV1DataScanEventDataQualityResult

Data quality result for data scan job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_score** | **Dict[str, float]** | The score of each column scanned in the data scan job. The key of the map is the name of the column. The value is the data quality score for the column.The score ranges between 0, 100 (up to two decimal points). | [optional] 
**dimension_passed** | **Dict[str, bool]** | The result of each dimension for data quality result. The key of the map is the name of the dimension. The value is the bool value depicting whether the dimension result was pass or not. | [optional] 
**dimension_score** | **Dict[str, float]** | The score of each dimension for data quality result. The key of the map is the name of the dimension. The value is the data quality score for the dimension.The score ranges between 0, 100 (up to two decimal points). | [optional] 
**passed** | **bool** | Whether the data quality result was pass or not. | [optional] 
**row_count** | **str** | The count of rows processed in the data scan job. | [optional] 
**score** | **float** | The table-level data quality score for the data scan job.The data quality score ranges between 0, 100 (up to two decimal points). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_scan_event_data_quality_result import GoogleCloudDataplexV1DataScanEventDataQualityResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataScanEventDataQualityResult from a JSON string
google_cloud_dataplex_v1_data_scan_event_data_quality_result_instance = GoogleCloudDataplexV1DataScanEventDataQualityResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataScanEventDataQualityResult.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_scan_event_data_quality_result_dict = google_cloud_dataplex_v1_data_scan_event_data_quality_result_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataScanEventDataQualityResult from a dict
google_cloud_dataplex_v1_data_scan_event_data_quality_result_from_dict = GoogleCloudDataplexV1DataScanEventDataQualityResult.from_dict(google_cloud_dataplex_v1_data_scan_event_data_quality_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


