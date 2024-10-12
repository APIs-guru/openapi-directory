# ActivityId

Unique identifier for each activity record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | Application name to which the event belongs. For possible values see the list of applications above in &#x60;applicationName&#x60;. | [optional] 
**customer_id** | **str** | The unique identifier for a Google Workspace account. | [optional] 
**time** | **datetime** | Time of occurrence of the activity. This is in UNIX epoch time in seconds. | [optional] 
**unique_qualifier** | **str** | Unique qualifier if multiple events have the same time. | [optional] 

## Example

```python
from openapi_client.models.activity_id import ActivityId

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityId from a JSON string
activity_id_instance = ActivityId.from_json(json)
# print the JSON string representation of the object
print(ActivityId.to_json())

# convert the object into a dict
activity_id_dict = activity_id_instance.to_dict()
# create an instance of ActivityId from a dict
activity_id_from_dict = ActivityId.from_dict(activity_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


