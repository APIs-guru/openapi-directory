# ActivityLogAlertLeafCondition

An Activity Log alert condition that is met by comparing an activity log field and value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**equals** | **str** | The field value will be compared to this value (case-insensitive) to determine if the condition is met. | 
**var_field** | **str** | The name of the field that this condition will examine. The possible values for this field are (case-insensitive): &#39;resourceId&#39;, &#39;category&#39;, &#39;caller&#39;, &#39;level&#39;, &#39;operationName&#39;, &#39;resourceGroup&#39;, &#39;resourceProvider&#39;, &#39;status&#39;, &#39;subStatus&#39;, &#39;resourceType&#39;, or anything beginning with &#39;properties.&#39;. | 

## Example

```python
from openapi_client.models.activity_log_alert_leaf_condition import ActivityLogAlertLeafCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityLogAlertLeafCondition from a JSON string
activity_log_alert_leaf_condition_instance = ActivityLogAlertLeafCondition.from_json(json)
# print the JSON string representation of the object
print(ActivityLogAlertLeafCondition.to_json())

# convert the object into a dict
activity_log_alert_leaf_condition_dict = activity_log_alert_leaf_condition_instance.to_dict()
# create an instance of ActivityLogAlertLeafCondition from a dict
activity_log_alert_leaf_condition_from_dict = ActivityLogAlertLeafCondition.from_dict(activity_log_alert_leaf_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


