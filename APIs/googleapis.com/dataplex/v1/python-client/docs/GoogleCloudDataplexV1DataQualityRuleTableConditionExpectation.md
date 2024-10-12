# GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation

Evaluates whether the provided expression is true.The SQL expression needs to use BigQuery standard SQL syntax and should produce a scalar boolean result.Example: MIN(col1) >= 0

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sql_expression** | **str** | Optional. The SQL expression. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_rule_table_condition_expectation import GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation from a JSON string
google_cloud_dataplex_v1_data_quality_rule_table_condition_expectation_instance = GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_rule_table_condition_expectation_dict = google_cloud_dataplex_v1_data_quality_rule_table_condition_expectation_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation from a dict
google_cloud_dataplex_v1_data_quality_rule_table_condition_expectation_from_dict = GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation.from_dict(google_cloud_dataplex_v1_data_quality_rule_table_condition_expectation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


