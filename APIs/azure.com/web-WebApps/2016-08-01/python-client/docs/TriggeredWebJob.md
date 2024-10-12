# TriggeredWebJob

Triggered Web Job Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | TriggeredWebJob resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.triggered_web_job import TriggeredWebJob

# TODO update the JSON string below
json = "{}"
# create an instance of TriggeredWebJob from a JSON string
triggered_web_job_instance = TriggeredWebJob.from_json(json)
# print the JSON string representation of the object
print(TriggeredWebJob.to_json())

# convert the object into a dict
triggered_web_job_dict = triggered_web_job_instance.to_dict()
# create an instance of TriggeredWebJob from a dict
triggered_web_job_from_dict = TriggeredWebJob.from_dict(triggered_web_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


