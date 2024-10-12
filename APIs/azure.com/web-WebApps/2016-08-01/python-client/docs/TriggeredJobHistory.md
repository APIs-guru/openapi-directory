# TriggeredJobHistory

Triggered Web Job History. List of Triggered Web Job Run Information elements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | TriggeredJobHistory resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.triggered_job_history import TriggeredJobHistory

# TODO update the JSON string below
json = "{}"
# create an instance of TriggeredJobHistory from a JSON string
triggered_job_history_instance = TriggeredJobHistory.from_json(json)
# print the JSON string representation of the object
print(TriggeredJobHistory.to_json())

# convert the object into a dict
triggered_job_history_dict = triggered_job_history_instance.to_dict()
# create an instance of TriggeredJobHistory from a dict
triggered_job_history_from_dict = TriggeredJobHistory.from_dict(triggered_job_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


