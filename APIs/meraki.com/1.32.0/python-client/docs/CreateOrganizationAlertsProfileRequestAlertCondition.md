# CreateOrganizationAlertsProfileRequestAlertCondition

The conditions that determine if the alert triggers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bit_rate_bps** | **int** | The threshold the metric must cross to be valid for alerting. Used only for WAN Utilization alerts. | [optional] 
**duration** | **int** | The total duration in seconds that the threshold should be crossed before alerting | [optional] 
**interface** | **str** | The uplink observed for the alert.  interface must be one of the following: wan1, wan2, cellular | [optional] 
**jitter_ms** | **int** | The threshold the metric must cross to be valid for alerting. Used only for VoIP Jitter alerts. | [optional] 
**latency_ms** | **int** | The threshold the metric must cross to be valid for alerting. Used only for WAN Latency alerts. | [optional] 
**loss_ratio** | **float** | The threshold the metric must cross to be valid for alerting. Used only for Packet Loss alerts. | [optional] 
**mos** | **float** | The threshold the metric must drop below to be valid for alerting. Used only for VoIP MOS alerts. | [optional] 
**window** | **int** | The look back period in seconds for sensing the alert | [optional] 

## Example

```python
from openapi_client.models.create_organization_alerts_profile_request_alert_condition import CreateOrganizationAlertsProfileRequestAlertCondition

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationAlertsProfileRequestAlertCondition from a JSON string
create_organization_alerts_profile_request_alert_condition_instance = CreateOrganizationAlertsProfileRequestAlertCondition.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationAlertsProfileRequestAlertCondition.to_json())

# convert the object into a dict
create_organization_alerts_profile_request_alert_condition_dict = create_organization_alerts_profile_request_alert_condition_instance.to_dict()
# create an instance of CreateOrganizationAlertsProfileRequestAlertCondition from a dict
create_organization_alerts_profile_request_alert_condition_from_dict = CreateOrganizationAlertsProfileRequestAlertCondition.from_dict(create_organization_alerts_profile_request_alert_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


