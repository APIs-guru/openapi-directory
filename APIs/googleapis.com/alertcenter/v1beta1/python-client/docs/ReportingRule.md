# ReportingRule

Alerts from Reporting Rules configured by Admin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_details** | **bytearray** | Any other associated alert details, for example, AlertConfiguration. | [optional] 
**name** | **str** | Rule name | [optional] 
**query** | **bytearray** | Alert Rule query Sample Query query { condition { filter { expected_application_id: 777491262838 expected_event_name: \&quot;indexable_content_change\&quot; filter_op: IN } } conjunction_operator: OR } | [optional] 

## Example

```python
from openapi_client.models.reporting_rule import ReportingRule

# TODO update the JSON string below
json = "{}"
# create an instance of ReportingRule from a JSON string
reporting_rule_instance = ReportingRule.from_json(json)
# print the JSON string representation of the object
print(ReportingRule.to_json())

# convert the object into a dict
reporting_rule_dict = reporting_rule_instance.to_dict()
# create an instance of ReportingRule from a dict
reporting_rule_from_dict = ReportingRule.from_dict(reporting_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


