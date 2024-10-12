# GoogleCloudRunV2Condition

Defines a status condition for a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_reason** | **str** | A reason for the execution condition. | [optional] 
**last_transition_time** | **str** | Last time the condition transitioned from one status to another. | [optional] 
**message** | **str** | Human readable message indicating details about the current status. | [optional] 
**reason** | **str** | A common (service-level) reason for this condition. | [optional] 
**revision_reason** | **str** | A reason for the revision condition. | [optional] 
**severity** | **str** | How to interpret failures of this condition, one of Error, Warning, Info | [optional] 
**state** | **str** | State of the condition. | [optional] 
**type** | **str** | type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * \&quot;Ready\&quot;: True when the Resource is ready. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_condition import GoogleCloudRunV2Condition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2Condition from a JSON string
google_cloud_run_v2_condition_instance = GoogleCloudRunV2Condition.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2Condition.to_json())

# convert the object into a dict
google_cloud_run_v2_condition_dict = google_cloud_run_v2_condition_instance.to_dict()
# create an instance of GoogleCloudRunV2Condition from a dict
google_cloud_run_v2_condition_from_dict = GoogleCloudRunV2Condition.from_dict(google_cloud_run_v2_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


