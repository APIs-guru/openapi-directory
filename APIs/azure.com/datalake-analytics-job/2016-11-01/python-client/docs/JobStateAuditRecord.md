# JobStateAuditRecord

The Data Lake Analytics job state audit records for tracking the lifecycle of a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | the details of the audit log. | [optional] [readonly] 
**new_state** | **str** | the new state the job is in. | [optional] [readonly] 
**requested_by_user** | **str** | the user who requests the change. | [optional] [readonly] 
**time_stamp** | **datetime** | the time stamp that the state change took place. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_state_audit_record import JobStateAuditRecord

# TODO update the JSON string below
json = "{}"
# create an instance of JobStateAuditRecord from a JSON string
job_state_audit_record_instance = JobStateAuditRecord.from_json(json)
# print the JSON string representation of the object
print(JobStateAuditRecord.to_json())

# convert the object into a dict
job_state_audit_record_dict = job_state_audit_record_instance.to_dict()
# create an instance of JobStateAuditRecord from a dict
job_state_audit_record_from_dict = JobStateAuditRecord.from_dict(job_state_audit_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


