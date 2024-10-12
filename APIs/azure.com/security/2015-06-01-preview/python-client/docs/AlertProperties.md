# AlertProperties

describes security alert properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_taken** | **str** | The action that was taken as a response to the alert (Active, Blocked etc.) | [optional] [readonly] 
**alert_display_name** | **str** | Display name of the alert type | [optional] [readonly] 
**alert_name** | **str** | Name of the alert type | [optional] [readonly] 
**associated_resource** | **str** | Azure resource ID of the associated resource | [optional] [readonly] 
**can_be_investigated** | **bool** | Whether this alert can be investigated with Azure Security Center | [optional] [readonly] 
**compromised_entity** | **str** | The entity that the incident happened on | [optional] [readonly] 
**confidence_reasons** | [**List[AlertConfidenceReason]**](AlertConfidenceReason.md) | reasons the alert got the confidenceScore value | [optional] 
**confidence_score** | **float** | level of confidence we have on the alert | [optional] [readonly] 
**description** | **str** | Description of the incident and what it means | [optional] [readonly] 
**detected_time_utc** | **datetime** | The time the incident was detected by the vendor | [optional] [readonly] 
**entities** | [**List[AlertEntity]**](AlertEntity.md) | objects that are related to this alerts | [optional] 
**extended_properties** | **Dict[str, object]** | Changing set of properties depending on the alert type. | [optional] 
**instance_id** | **str** | Instance ID of the alert. | [optional] [readonly] 
**is_incident** | **bool** | Whether this alert is for incident type or not (otherwise - single alert) | [optional] [readonly] 
**remediation_steps** | **str** | Recommended steps to reradiate the incident | [optional] [readonly] 
**reported_severity** | **str** | Estimated severity of this alert | [optional] [readonly] 
**reported_time_utc** | **datetime** | The time the incident was reported to Microsoft.Security in UTC | [optional] [readonly] 
**state** | **str** | State of the alert (Active, Dismissed etc.) | [optional] [readonly] 
**subscription_id** | **str** | Azure subscription ID of the resource that had the security alert or the subscription ID of the workspace that this resource reports to | [optional] [readonly] 
**system_source** | **str** | The type of the alerted resource (Azure, Non-Azure) | [optional] [readonly] 
**vendor_name** | **str** | Name of the vendor that discovered the incident | [optional] [readonly] 
**workspace_arm_id** | **str** | Azure resource ID of the workspace that the alert was reported to. | [optional] [readonly] 

## Example

```python
from openapi_client.models.alert_properties import AlertProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AlertProperties from a JSON string
alert_properties_instance = AlertProperties.from_json(json)
# print the JSON string representation of the object
print(AlertProperties.to_json())

# convert the object into a dict
alert_properties_dict = alert_properties_instance.to_dict()
# create an instance of AlertProperties from a dict
alert_properties_from_dict = AlertProperties.from_dict(alert_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


