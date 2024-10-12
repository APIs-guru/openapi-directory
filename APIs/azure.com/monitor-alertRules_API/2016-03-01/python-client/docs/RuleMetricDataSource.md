# RuleMetricDataSource

A rule metric data source. The discriminator value is always RuleMetricDataSource in this case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_name** | **str** | the name of the metric that defines what the rule monitors. | [optional] 

## Example

```python
from openapi_client.models.rule_metric_data_source import RuleMetricDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of RuleMetricDataSource from a JSON string
rule_metric_data_source_instance = RuleMetricDataSource.from_json(json)
# print the JSON string representation of the object
print(RuleMetricDataSource.to_json())

# convert the object into a dict
rule_metric_data_source_dict = rule_metric_data_source_instance.to_dict()
# create an instance of RuleMetricDataSource from a dict
rule_metric_data_source_from_dict = RuleMetricDataSource.from_dict(rule_metric_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


