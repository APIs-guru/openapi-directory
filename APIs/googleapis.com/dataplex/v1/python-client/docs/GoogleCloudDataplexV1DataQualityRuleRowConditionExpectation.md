# GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation

Evaluates whether each row passes the specified condition.The SQL expression needs to use BigQuery standard SQL syntax and should produce a boolean value per row as the result.Example: col1 >= 0 AND col2 < 10

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sql_expression** | **str** | Optional. The SQL expression. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_rule_row_condition_expectation import GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation from a JSON string
google_cloud_dataplex_v1_data_quality_rule_row_condition_expectation_instance = GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_rule_row_condition_expectation_dict = google_cloud_dataplex_v1_data_quality_rule_row_condition_expectation_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation from a dict
google_cloud_dataplex_v1_data_quality_rule_row_condition_expectation_from_dict = GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation.from_dict(google_cloud_dataplex_v1_data_quality_rule_row_condition_expectation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


