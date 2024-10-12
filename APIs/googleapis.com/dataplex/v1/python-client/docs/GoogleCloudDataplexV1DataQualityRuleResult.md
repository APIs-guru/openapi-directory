# GoogleCloudDataplexV1DataQualityRuleResult

DataQualityRuleResult provides a more detailed, per-rule view of the results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluated_count** | **str** | The number of rows a rule was evaluated against.This field is only valid for row-level type rules.Evaluated count can be configured to either include all rows (default) - with null rows automatically failing rule evaluation, or exclude null rows from the evaluated_count, by setting ignore_nulls &#x3D; true. | [optional] 
**failing_rows_query** | **str** | The query to find rows that did not pass this rule.This field is only valid for row-level type rules. | [optional] 
**null_count** | **str** | The number of rows with null values in the specified column. | [optional] 
**pass_ratio** | **float** | The ratio of passed_count / evaluated_count.This field is only valid for row-level type rules. | [optional] 
**passed** | **bool** | Whether the rule passed or failed. | [optional] 
**passed_count** | **str** | The number of rows which passed a rule evaluation.This field is only valid for row-level type rules. | [optional] 
**rule** | [**GoogleCloudDataplexV1DataQualityRule**](GoogleCloudDataplexV1DataQualityRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_rule_result import GoogleCloudDataplexV1DataQualityRuleResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualityRuleResult from a JSON string
google_cloud_dataplex_v1_data_quality_rule_result_instance = GoogleCloudDataplexV1DataQualityRuleResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualityRuleResult.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_rule_result_dict = google_cloud_dataplex_v1_data_quality_rule_result_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualityRuleResult from a dict
google_cloud_dataplex_v1_data_quality_rule_result_from_dict = GoogleCloudDataplexV1DataQualityRuleResult.from_dict(google_cloud_dataplex_v1_data_quality_rule_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


