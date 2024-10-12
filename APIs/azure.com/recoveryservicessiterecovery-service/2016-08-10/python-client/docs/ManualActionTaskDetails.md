# ManualActionTaskDetails

This class represents the manual action task details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instructions** | **str** | The instructions. | [optional] 
**name** | **str** | The name. | [optional] 
**observation** | **str** | The observation. | [optional] 

## Example

```python
from openapi_client.models.manual_action_task_details import ManualActionTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ManualActionTaskDetails from a JSON string
manual_action_task_details_instance = ManualActionTaskDetails.from_json(json)
# print the JSON string representation of the object
print(ManualActionTaskDetails.to_json())

# convert the object into a dict
manual_action_task_details_dict = manual_action_task_details_instance.to_dict()
# create an instance of ManualActionTaskDetails from a dict
manual_action_task_details_from_dict = ManualActionTaskDetails.from_dict(manual_action_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


