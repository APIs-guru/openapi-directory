# JobMessage

A particular message pertaining to a Dataflow job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Deprecated. | [optional] 
**message_importance** | **str** | Importance level of the message. | [optional] 
**message_text** | **str** | The text of the message. | [optional] 
**time** | **str** | The timestamp of the message. | [optional] 

## Example

```python
from openapi_client.models.job_message import JobMessage

# TODO update the JSON string below
json = "{}"
# create an instance of JobMessage from a JSON string
job_message_instance = JobMessage.from_json(json)
# print the JSON string representation of the object
print(JobMessage.to_json())

# convert the object into a dict
job_message_dict = job_message_instance.to_dict()
# create an instance of JobMessage from a dict
job_message_from_dict = JobMessage.from_dict(job_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


