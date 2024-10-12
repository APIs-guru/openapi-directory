# GoogleCloudDataplexV1DataQualityRule

A rule captures data quality intent about a data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | Optional. The unnested column which this rule is evaluated against. | [optional] 
**description** | **str** | Optional. Description of the rule. The maximum length is 1,024 characters. | [optional] 
**dimension** | **str** | Required. The dimension a rule belongs to. Results are also aggregated at the dimension level. Supported dimensions are \&quot;COMPLETENESS\&quot;, \&quot;ACCURACY\&quot;, \&quot;CONSISTENCY\&quot;, \&quot;VALIDITY\&quot;, \&quot;UNIQUENESS\&quot;, \&quot;INTEGRITY\&quot; | [optional] 
**ignore_null** | **bool** | Optional. Rows with null values will automatically fail a rule, unless ignore_null is true. In that case, such null rows are trivially considered passing.This field is only valid for the following type of rules: RangeExpectation RegexExpectation SetExpectation UniquenessExpectation | [optional] 
**name** | **str** | Optional. A mutable name for the rule. The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-). The maximum length is 63 characters. Must start with a letter. Must end with a number or a letter. | [optional] 
**non_null_expectation** | **object** | Evaluates whether each column value is null. | [optional] 
**range_expectation** | [**GoogleCloudDataplexV1DataQualityRuleRangeExpectation**](GoogleCloudDataplexV1DataQualityRuleRangeExpectation.md) |  | [optional] 
**regex_expectation** | [**GoogleCloudDataplexV1DataQualityRuleRegexExpectation**](GoogleCloudDataplexV1DataQualityRuleRegexExpectation.md) |  | [optional] 
**row_condition_expectation** | [**GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation**](GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation.md) |  | [optional] 
**set_expectation** | [**GoogleCloudDataplexV1DataQualityRuleSetExpectation**](GoogleCloudDataplexV1DataQualityRuleSetExpectation.md) |  | [optional] 
**statistic_range_expectation** | [**GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation**](GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation.md) |  | [optional] 
**table_condition_expectation** | [**GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation**](GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation.md) |  | [optional] 
**threshold** | **float** | Optional. The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of 0.0, 1.0.0 indicates default value (i.e. 1.0).This field is only valid for row-level type rules. | [optional] 
**uniqueness_expectation** | **object** | Evaluates whether the column has duplicates. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_rule import GoogleCloudDataplexV1DataQualityRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualityRule from a JSON string
google_cloud_dataplex_v1_data_quality_rule_instance = GoogleCloudDataplexV1DataQualityRule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualityRule.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_rule_dict = google_cloud_dataplex_v1_data_quality_rule_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualityRule from a dict
google_cloud_dataplex_v1_data_quality_rule_from_dict = GoogleCloudDataplexV1DataQualityRule.from_dict(google_cloud_dataplex_v1_data_quality_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


