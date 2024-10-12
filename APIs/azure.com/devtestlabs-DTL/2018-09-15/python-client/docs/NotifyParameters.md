# NotifyParameters

Properties for generating a Notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_name** | **str** | The type of event (i.e. AutoShutdown, Cost) | [optional] 
**json_payload** | **str** | Properties for the notification in json format. | [optional] 

## Example

```python
from openapi_client.models.notify_parameters import NotifyParameters

# TODO update the JSON string below
json = "{}"
# create an instance of NotifyParameters from a JSON string
notify_parameters_instance = NotifyParameters.from_json(json)
# print the JSON string representation of the object
print(NotifyParameters.to_json())

# convert the object into a dict
notify_parameters_dict = notify_parameters_instance.to_dict()
# create an instance of NotifyParameters from a dict
notify_parameters_from_dict = NotifyParameters.from_dict(notify_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


