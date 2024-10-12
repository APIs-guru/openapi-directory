# AutomationRun

An `AutomationRun` resource in the Cloud Deploy API. An `AutomationRun` represents an execution instance of an automation rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advance_rollout_operation** | [**AdvanceRolloutOperation**](AdvanceRolloutOperation.md) |  | [optional] 
**automation_id** | **str** | Output only. The ID of the automation that initiated the operation. | [optional] [readonly] 
**automation_snapshot** | [**Automation**](Automation.md) |  | [optional] 
**create_time** | **str** | Output only. Time at which the &#x60;AutomationRun&#x60; was created. | [optional] [readonly] 
**etag** | **str** | Output only. The weak etag of the &#x60;AutomationRun&#x60; resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] [readonly] 
**expire_time** | **str** | Output only. Time the &#x60;AutomationRun&#x60; expires. An &#x60;AutomationRun&#x60; expires after 14 days from its creation date. | [optional] [readonly] 
**name** | **str** | Output only. Name of the &#x60;AutomationRun&#x60;. Format is &#x60;projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}/automationRuns/{automation_run}&#x60;. | [optional] [readonly] 
**promote_release_operation** | [**PromoteReleaseOperation**](PromoteReleaseOperation.md) |  | [optional] 
**repair_rollout_operation** | [**RepairRolloutOperation**](RepairRolloutOperation.md) |  | [optional] 
**rule_id** | **str** | Output only. The ID of the automation rule that initiated the operation. | [optional] [readonly] 
**service_account** | **str** | Output only. Email address of the user-managed IAM service account that performs the operations against Cloud Deploy resources. | [optional] [readonly] 
**state** | **str** | Output only. Current state of the &#x60;AutomationRun&#x60;. | [optional] [readonly] 
**state_description** | **str** | Output only. Explains the current state of the &#x60;AutomationRun&#x60;. Present only when an explanation is needed. | [optional] [readonly] 
**target_id** | **str** | Output only. The ID of the target that represents the promotion stage that initiates the &#x60;AutomationRun&#x60;. The value of this field is the last segment of a target name. | [optional] [readonly] 
**update_time** | **str** | Output only. Time at which the automationRun was updated. | [optional] [readonly] 
**wait_until_time** | **str** | Output only. Earliest time the &#x60;AutomationRun&#x60; will attempt to resume. Wait-time is configured by &#x60;wait&#x60; in automation rule. | [optional] [readonly] 

## Example

```python
from openapi_client.models.automation_run import AutomationRun

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationRun from a JSON string
automation_run_instance = AutomationRun.from_json(json)
# print the JSON string representation of the object
print(AutomationRun.to_json())

# convert the object into a dict
automation_run_dict = automation_run_instance.to_dict()
# create an instance of AutomationRun from a dict
automation_run_from_dict = AutomationRun.from_dict(automation_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


