# GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation

Evaluates whether the column aggregate statistic lies between a specified range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_value** | **str** | Optional. The maximum column statistic value allowed for a row to pass this validation.At least one of min_value and max_value need to be provided. | [optional] 
**min_value** | **str** | Optional. The minimum column statistic value allowed for a row to pass this validation.At least one of min_value and max_value need to be provided. | [optional] 
**statistic** | **str** | Optional. The aggregate metric to evaluate. | [optional] 
**strict_max_enabled** | **bool** | Optional. Whether column statistic needs to be strictly lesser than (&#39;&lt;&#39;) the maximum, or if equality is allowed.Only relevant if a max_value has been defined. Default &#x3D; false. | [optional] 
**strict_min_enabled** | **bool** | Optional. Whether column statistic needs to be strictly greater than (&#39;&gt;&#39;) the minimum, or if equality is allowed.Only relevant if a min_value has been defined. Default &#x3D; false. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_rule_statistic_range_expectation import GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation from a JSON string
google_cloud_dataplex_v1_data_quality_rule_statistic_range_expectation_instance = GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_rule_statistic_range_expectation_dict = google_cloud_dataplex_v1_data_quality_rule_statistic_range_expectation_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation from a dict
google_cloud_dataplex_v1_data_quality_rule_statistic_range_expectation_from_dict = GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation.from_dict(google_cloud_dataplex_v1_data_quality_rule_statistic_range_expectation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


