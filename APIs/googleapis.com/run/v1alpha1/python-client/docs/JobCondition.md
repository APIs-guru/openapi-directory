# JobCondition

JobCondition defines a readiness condition for a Revision.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_transition_time** | **str** | Optional. Last time the condition transitioned from one status to another. | [optional] 
**message** | **str** | Optional. Human readable message indicating details about the current status. | [optional] 
**reason** | **str** | Optional. One-word CamelCase reason for the condition&#39;s last transition. | [optional] 
**severity** | **str** | Optional. How to interpret failures of this condition, one of Error, Warning, Info | [optional] 
**status** | **str** | Required. Status of the condition, one of True, False, Unknown. | [optional] 
**type** | **str** | Required. Type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types include: * \&quot;Completed\&quot;: True when the Job has successfully completed. * \&quot;Started\&quot;: True when the Job has successfully started running. * \&quot;ResourcesAvailable\&quot;: True when underlying resources have been provisioned. | [optional] 

## Example

```python
from openapi_client.models.job_condition import JobCondition

# TODO update the JSON string below
json = "{}"
# create an instance of JobCondition from a JSON string
job_condition_instance = JobCondition.from_json(json)
# print the JSON string representation of the object
print(JobCondition.to_json())

# convert the object into a dict
job_condition_dict = job_condition_instance.to_dict()
# create an instance of JobCondition from a dict
job_condition_from_dict = JobCondition.from_dict(job_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


