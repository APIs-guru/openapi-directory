# ActivityRule

Alerts from Google Workspace Security Center rules service configured by an admin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_names** | **List[str]** | List of action names associated with the rule threshold. | [optional] 
**create_time** | **str** | Rule create timestamp. | [optional] 
**description** | **str** | Description of the rule. | [optional] 
**display_name** | **str** | Alert display name. | [optional] 
**name** | **str** | Rule name. | [optional] 
**query** | **str** | Query that is used to get the data from the associated source. | [optional] 
**superseded_alerts** | **List[str]** | List of alert IDs superseded by this alert. It is used to indicate that this alert is essentially extension of superseded alerts and we found the relationship after creating these alerts. | [optional] 
**superseding_alert** | **str** | Alert ID superseding this alert. It is used to indicate that superseding alert is essentially extension of this alert and we found the relationship after creating both alerts. | [optional] 
**threshold** | **str** | Alert threshold is for example “COUNT &gt; 5”. | [optional] 
**trigger_source** | **str** | The trigger sources for this rule. * GMAIL_EVENTS * DEVICE_EVENTS * USER_EVENTS | [optional] 
**update_time** | **str** | The timestamp of the last update to the rule. | [optional] 
**window_size** | **str** | Rule window size. Possible values are 1 hour or 24 hours. | [optional] 

## Example

```python
from openapi_client.models.activity_rule import ActivityRule

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityRule from a JSON string
activity_rule_instance = ActivityRule.from_json(json)
# print the JSON string representation of the object
print(ActivityRule.to_json())

# convert the object into a dict
activity_rule_dict = activity_rule_instance.to_dict()
# create an instance of ActivityRule from a dict
activity_rule_from_dict = ActivityRule.from_dict(activity_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


