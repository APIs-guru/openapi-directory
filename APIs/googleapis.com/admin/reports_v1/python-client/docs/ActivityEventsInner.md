# ActivityEventsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the event. This is the specific name of the activity reported by the API. And each &#x60;eventName&#x60; is related to a specific Google Workspace service or feature which the API organizes into types of events. For &#x60;eventName&#x60; request parameters in general: - If no &#x60;eventName&#x60; is given, the report returns all possible instances of an &#x60;eventName&#x60;. - When you request an &#x60;eventName&#x60;, the API&#39;s response returns all activities which contain that &#x60;eventName&#x60;. For more information about &#x60;eventName&#x60; properties, see the list of event names for various applications above in &#x60;applicationName&#x60;. | [optional] 
**parameters** | [**List[ActivityEventsInnerParametersInner]**](ActivityEventsInnerParametersInner.md) | Parameter value pairs for various applications. For more information about &#x60;eventName&#x60; parameters, see the list of event names for various applications above in &#x60;applicationName&#x60;. | [optional] 
**type** | **str** | Type of event. The Google Workspace service or feature that an administrator changes is identified in the &#x60;type&#x60; property which identifies an event using the &#x60;eventName&#x60; property. For a full list of the API&#39;s &#x60;type&#x60; categories, see the list of event names for various applications above in &#x60;applicationName&#x60;. | [optional] 

## Example

```python
from openapi_client.models.activity_events_inner import ActivityEventsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityEventsInner from a JSON string
activity_events_inner_instance = ActivityEventsInner.from_json(json)
# print the JSON string representation of the object
print(ActivityEventsInner.to_json())

# convert the object into a dict
activity_events_inner_dict = activity_events_inner_instance.to_dict()
# create an instance of ActivityEventsInner from a dict
activity_events_inner_from_dict = ActivityEventsInner.from_dict(activity_events_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


