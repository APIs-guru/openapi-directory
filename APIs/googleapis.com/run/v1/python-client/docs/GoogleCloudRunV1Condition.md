# GoogleCloudRunV1Condition

Conditions show the status of reconciliation progress on a given resource. Most resource use a top-level condition type \"Ready\" or \"Completed\" to show overall status with other conditions to checkpoint each stage of reconciliation. Note that if metadata.Generation does not equal status.ObservedGeneration, the conditions shown may not be relevant for the current spec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_transition_time** | **str** | Optional. Last time the condition transitioned from one status to another. | [optional] 
**message** | **str** | Optional. Human readable message indicating details about the current status. | [optional] 
**reason** | **str** | Optional. One-word CamelCase reason for the condition&#39;s last transition. These are intended to be stable, unique values which the client may use to trigger error handling logic, whereas messages which may be changed later by the server. | [optional] 
**severity** | **str** | Optional. How to interpret this condition. One of Error, Warning, or Info. Conditions of severity Info do not contribute to resource readiness. | [optional] 
**status** | **str** | Status of the condition, one of True, False, Unknown. | [optional] 
**type** | **str** | type is used to communicate the status of the reconciliation process. Types common to all resources include: * \&quot;Ready\&quot; or \&quot;Completed\&quot;: True when the Resource is ready. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v1_condition import GoogleCloudRunV1Condition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV1Condition from a JSON string
google_cloud_run_v1_condition_instance = GoogleCloudRunV1Condition.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV1Condition.to_json())

# convert the object into a dict
google_cloud_run_v1_condition_dict = google_cloud_run_v1_condition_instance.to_dict()
# create an instance of GoogleCloudRunV1Condition from a dict
google_cloud_run_v1_condition_from_dict = GoogleCloudRunV1Condition.from_dict(google_cloud_run_v1_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


