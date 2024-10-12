# GoogleCloudDataplexV1DataQualityRuleSetExpectation

Evaluates whether each column value is contained by a specified set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | Optional. Expected values for the column value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_rule_set_expectation import GoogleCloudDataplexV1DataQualityRuleSetExpectation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualityRuleSetExpectation from a JSON string
google_cloud_dataplex_v1_data_quality_rule_set_expectation_instance = GoogleCloudDataplexV1DataQualityRuleSetExpectation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualityRuleSetExpectation.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_rule_set_expectation_dict = google_cloud_dataplex_v1_data_quality_rule_set_expectation_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualityRuleSetExpectation from a dict
google_cloud_dataplex_v1_data_quality_rule_set_expectation_from_dict = GoogleCloudDataplexV1DataQualityRuleSetExpectation.from_dict(google_cloud_dataplex_v1_data_quality_rule_set_expectation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


