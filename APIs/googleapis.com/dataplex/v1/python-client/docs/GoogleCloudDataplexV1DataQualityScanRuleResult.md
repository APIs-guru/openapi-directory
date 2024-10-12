# GoogleCloudDataplexV1DataQualityScanRuleResult

Information about the result of a data quality rule for data quality scan. The monitored resource is 'DataScan'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | The column which this rule is evaluated against. | [optional] 
**data_source** | **str** | The data source of the data scan (e.g. BigQuery table name). | [optional] 
**evaluated_row_count** | **str** | The number of rows evaluated against the data quality rule. This field is only valid for rules of PER_ROW evaluation type. | [optional] 
**evalution_type** | **str** | The evaluation type of the data quality rule. | [optional] 
**job_id** | **str** | Identifier of the specific data scan job this log entry is for. | [optional] 
**null_row_count** | **str** | The number of rows with null values in the specified column. | [optional] 
**passed_row_count** | **str** | The number of rows which passed a rule evaluation. This field is only valid for rules of PER_ROW evaluation type. | [optional] 
**result** | **str** | The result of the data quality rule. | [optional] 
**rule_dimension** | **str** | The dimension of the data quality rule. | [optional] 
**rule_name** | **str** | The name of the data quality rule. | [optional] 
**rule_type** | **str** | The type of the data quality rule. | [optional] 
**threshold_percent** | **float** | The passing threshold (0.0, 100.0) of the data quality rule. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_scan_rule_result import GoogleCloudDataplexV1DataQualityScanRuleResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualityScanRuleResult from a JSON string
google_cloud_dataplex_v1_data_quality_scan_rule_result_instance = GoogleCloudDataplexV1DataQualityScanRuleResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualityScanRuleResult.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_scan_rule_result_dict = google_cloud_dataplex_v1_data_quality_scan_rule_result_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualityScanRuleResult from a dict
google_cloud_dataplex_v1_data_quality_scan_rule_result_from_dict = GoogleCloudDataplexV1DataQualityScanRuleResult.from_dict(google_cloud_dataplex_v1_data_quality_scan_rule_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


