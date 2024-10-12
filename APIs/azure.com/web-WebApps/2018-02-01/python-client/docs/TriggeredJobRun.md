# TriggeredJobRun

Triggered Web Job Run Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | TriggeredJobRun resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.triggered_job_run import TriggeredJobRun

# TODO update the JSON string below
json = "{}"
# create an instance of TriggeredJobRun from a JSON string
triggered_job_run_instance = TriggeredJobRun.from_json(json)
# print the JSON string representation of the object
print(TriggeredJobRun.to_json())

# convert the object into a dict
triggered_job_run_dict = triggered_job_run_instance.to_dict()
# create an instance of TriggeredJobRun from a dict
triggered_job_run_from_dict = TriggeredJobRun.from_dict(triggered_job_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


