# ProjectEvent

The request sent to CLHs during project events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_id** | **str** | The unique ID for this project event. CLHs can use this value to dedup repeated calls. required | [optional] 
**phase** | **str** |  | [optional] 
**project_metadata** | [**ProjectsMetadata**](ProjectsMetadata.md) |  | [optional] 
**state** | [**ContainerState**](ContainerState.md) |  | [optional] 

## Example

```python
from openapi_client.models.project_event import ProjectEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectEvent from a JSON string
project_event_instance = ProjectEvent.from_json(json)
# print the JSON string representation of the object
print(ProjectEvent.to_json())

# convert the object into a dict
project_event_dict = project_event_instance.to_dict()
# create an instance of ProjectEvent from a dict
project_event_from_dict = ProjectEvent.from_dict(project_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


