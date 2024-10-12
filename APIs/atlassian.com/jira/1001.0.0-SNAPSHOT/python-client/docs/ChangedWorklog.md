# ChangedWorklog

Details of a changed worklog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**List[EntityProperty]**](EntityProperty.md) | Details of properties associated with the change. | [optional] [readonly] 
**updated_time** | **int** | The datetime of the change. | [optional] [readonly] 
**worklog_id** | **int** | The ID of the worklog. | [optional] [readonly] 

## Example

```python
from openapi_client.models.changed_worklog import ChangedWorklog

# TODO update the JSON string below
json = "{}"
# create an instance of ChangedWorklog from a JSON string
changed_worklog_instance = ChangedWorklog.from_json(json)
# print the JSON string representation of the object
print(ChangedWorklog.to_json())

# convert the object into a dict
changed_worklog_dict = changed_worklog_instance.to_dict()
# create an instance of ChangedWorklog from a dict
changed_worklog_from_dict = ChangedWorklog.from_dict(changed_worklog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


