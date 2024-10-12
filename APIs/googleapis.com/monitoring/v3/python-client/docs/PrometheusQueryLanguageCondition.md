# PrometheusQueryLanguageCondition

A condition type that allows alert policies to be defined using Prometheus Query Language (PromQL) (https://prometheus.io/docs/prometheus/latest/querying/basics/).The PrometheusQueryLanguageCondition message contains information from a Prometheus alerting rule and its associated rule group.A Prometheus alerting rule is described here (https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/). The semantics of a Prometheus alerting rule is described here (https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/#rule).A Prometheus rule group is described here (https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/). The semantics of a Prometheus rule group is described here (https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/#rule_group).Because Cloud Alerting has no representation of a Prometheus rule group resource, we must embed the information of the parent rule group inside each of the conditions that refer to it. We must also update the contents of all Prometheus alerts in case the information of their rule group changes.The PrometheusQueryLanguageCondition protocol buffer combines the information of the corresponding rule group and alerting rule. The structure of the PrometheusQueryLanguageCondition protocol buffer does NOT mimic the structure of the Prometheus rule group and alerting rule YAML declarations. The PrometheusQueryLanguageCondition protocol buffer may change in the future to support future rule group and/or alerting rule features. There are no new such features at the present time (2023-06-26).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_rule** | **str** | Optional. The alerting rule name of this alert in the corresponding Prometheus configuration file.Some external tools may require this field to be populated correctly in order to refer to the original Prometheus configuration file. The rule group name and the alert name are necessary to update the relevant AlertPolicies in case the definition of the rule group changes in the future.This field is optional. If this field is not empty, then it must be a valid Prometheus label name (https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels). This field may not exceed 2048 Unicode characters in length. | [optional] 
**duration** | **str** | Optional. Alerts are considered firing once their PromQL expression was evaluated to be \&quot;true\&quot; for this long. Alerts whose PromQL expression was not evaluated to be \&quot;true\&quot; for long enough are considered pending. Must be a non-negative duration or missing. This field is optional. Its default value is zero. | [optional] 
**evaluation_interval** | **str** | Optional. How often this rule should be evaluated. Must be a positive multiple of 30 seconds or missing. This field is optional. Its default value is 30 seconds. If this PrometheusQueryLanguageCondition was generated from a Prometheus alerting rule, then this value should be taken from the enclosing rule group. | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels to add to or overwrite in the PromQL query result. Label names must be valid (https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels). Label values can be templatized by using variables (https://cloud.google.com/monitoring/alerts/doc-variables). The only available variable names are the names of the labels in the PromQL result, including \&quot;__name__\&quot; and \&quot;value\&quot;. \&quot;labels\&quot; may be empty. | [optional] 
**query** | **str** | Required. The PromQL expression to evaluate. Every evaluation cycle this expression is evaluated at the current time, and all resultant time series become pending/firing alerts. This field must not be empty. | [optional] 
**rule_group** | **str** | Optional. The rule group name of this alert in the corresponding Prometheus configuration file.Some external tools may require this field to be populated correctly in order to refer to the original Prometheus configuration file. The rule group name and the alert name are necessary to update the relevant AlertPolicies in case the definition of the rule group changes in the future.This field is optional. If this field is not empty, then it must contain a valid UTF-8 string. This field may not exceed 2048 Unicode characters in length. | [optional] 

## Example

```python
from openapi_client.models.prometheus_query_language_condition import PrometheusQueryLanguageCondition

# TODO update the JSON string below
json = "{}"
# create an instance of PrometheusQueryLanguageCondition from a JSON string
prometheus_query_language_condition_instance = PrometheusQueryLanguageCondition.from_json(json)
# print the JSON string representation of the object
print(PrometheusQueryLanguageCondition.to_json())

# convert the object into a dict
prometheus_query_language_condition_dict = prometheus_query_language_condition_instance.to_dict()
# create an instance of PrometheusQueryLanguageCondition from a dict
prometheus_query_language_condition_from_dict = PrometheusQueryLanguageCondition.from_dict(prometheus_query_language_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


