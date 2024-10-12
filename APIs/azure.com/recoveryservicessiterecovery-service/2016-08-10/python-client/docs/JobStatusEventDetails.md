# JobStatusEventDetails

Model class for event details of a job status event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_object_type** | **str** | AffectedObjectType for the event. | [optional] 
**job_friendly_name** | **str** | JobName for the Event. | [optional] 
**job_id** | **str** | Job arm id for the event. | [optional] 
**job_status** | **str** | JobStatus for the Event. | [optional] 

## Example

```python
from openapi_client.models.job_status_event_details import JobStatusEventDetails

# TODO update the JSON string below
json = "{}"
# create an instance of JobStatusEventDetails from a JSON string
job_status_event_details_instance = JobStatusEventDetails.from_json(json)
# print the JSON string representation of the object
print(JobStatusEventDetails.to_json())

# convert the object into a dict
job_status_event_details_dict = job_status_event_details_instance.to_dict()
# create an instance of JobStatusEventDetails from a dict
job_status_event_details_from_dict = JobStatusEventDetails.from_dict(job_status_event_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


