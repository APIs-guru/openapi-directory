# GoogleCloudDataplexV1DataQualityResult

The output of a DataQualityScan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[GoogleCloudDataplexV1DataQualityColumnResult]**](GoogleCloudDataplexV1DataQualityColumnResult.md) | Output only. A list of results at the column level.A column will have a corresponding DataQualityColumnResult if and only if there is at least one rule with the &#39;column&#39; field set to it. | [optional] [readonly] 
**dimensions** | [**List[GoogleCloudDataplexV1DataQualityDimensionResult]**](GoogleCloudDataplexV1DataQualityDimensionResult.md) | A list of results at the dimension level.A dimension will have a corresponding DataQualityDimensionResult if and only if there is at least one rule with the &#39;dimension&#39; field set to it. | [optional] 
**passed** | **bool** | Overall data quality result -- true if all rules passed. | [optional] 
**post_scan_actions_result** | [**GoogleCloudDataplexV1DataQualityResultPostScanActionsResult**](GoogleCloudDataplexV1DataQualityResultPostScanActionsResult.md) |  | [optional] 
**row_count** | **str** | The count of rows processed. | [optional] 
**rules** | [**List[GoogleCloudDataplexV1DataQualityRuleResult]**](GoogleCloudDataplexV1DataQualityRuleResult.md) | A list of all the rules in a job, and their results. | [optional] 
**scanned_data** | [**GoogleCloudDataplexV1ScannedData**](GoogleCloudDataplexV1ScannedData.md) |  | [optional] 
**score** | **float** | Output only. The overall data quality score.The score ranges between 0, 100 (up to two decimal points). | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_result import GoogleCloudDataplexV1DataQualityResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualityResult from a JSON string
google_cloud_dataplex_v1_data_quality_result_instance = GoogleCloudDataplexV1DataQualityResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualityResult.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_result_dict = google_cloud_dataplex_v1_data_quality_result_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualityResult from a dict
google_cloud_dataplex_v1_data_quality_result_from_dict = GoogleCloudDataplexV1DataQualityResult.from_dict(google_cloud_dataplex_v1_data_quality_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


