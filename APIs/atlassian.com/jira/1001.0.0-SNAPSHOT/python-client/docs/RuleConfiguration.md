# RuleConfiguration

A rule configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | EXPERIMENTAL: Whether the rule is disabled. | [optional] [default to False]
**tag** | **str** | EXPERIMENTAL: A tag used to filter rules in [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get). | [optional] 
**value** | **str** | Configuration of the rule, as it is stored by the Connect or the Forge app on the rule configuration page. | 

## Example

```python
from openapi_client.models.rule_configuration import RuleConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of RuleConfiguration from a JSON string
rule_configuration_instance = RuleConfiguration.from_json(json)
# print the JSON string representation of the object
print(RuleConfiguration.to_json())

# convert the object into a dict
rule_configuration_dict = rule_configuration_instance.to_dict()
# create an instance of RuleConfiguration from a dict
rule_configuration_from_dict = RuleConfiguration.from_dict(rule_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


