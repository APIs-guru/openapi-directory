# JobEvent

An event issued when a job seeker interacts with the application that implements Cloud Talent Solution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | **List[str]** | Required. The job name(s) associated with this event. For example, if this is an impression event, this field contains the identifiers of all jobs shown to the job seeker. If this was a view event, this field contains the identifier of the viewed job. | [optional] 
**type** | **str** | Required. The type of the event (see JobEventType). | [optional] 

## Example

```python
from openapi_client.models.job_event import JobEvent

# TODO update the JSON string below
json = "{}"
# create an instance of JobEvent from a JSON string
job_event_instance = JobEvent.from_json(json)
# print the JSON string representation of the object
print(JobEvent.to_json())

# convert the object into a dict
job_event_dict = job_event_instance.to_dict()
# create an instance of JobEvent from a dict
job_event_from_dict = JobEvent.from_dict(job_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


