# GoogleCloudDataplexV1DataQualityRuleRegexExpectation

Evaluates whether each column value matches a specified regex.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regex** | **str** | Optional. A regular expression the column value is expected to match. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_rule_regex_expectation import GoogleCloudDataplexV1DataQualityRuleRegexExpectation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualityRuleRegexExpectation from a JSON string
google_cloud_dataplex_v1_data_quality_rule_regex_expectation_instance = GoogleCloudDataplexV1DataQualityRuleRegexExpectation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualityRuleRegexExpectation.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_rule_regex_expectation_dict = google_cloud_dataplex_v1_data_quality_rule_regex_expectation_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualityRuleRegexExpectation from a dict
google_cloud_dataplex_v1_data_quality_rule_regex_expectation_from_dict = GoogleCloudDataplexV1DataQualityRuleRegexExpectation.from_dict(google_cloud_dataplex_v1_data_quality_rule_regex_expectation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


