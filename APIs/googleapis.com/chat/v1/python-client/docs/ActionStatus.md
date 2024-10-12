# ActionStatus

Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_code** | **str** | The status code. | [optional] 
**user_facing_message** | **str** | The message to send users about the status of their request. If unset, a generic message based on the &#x60;status_code&#x60; is sent. | [optional] 

## Example

```python
from openapi_client.models.action_status import ActionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ActionStatus from a JSON string
action_status_instance = ActionStatus.from_json(json)
# print the JSON string representation of the object
print(ActionStatus.to_json())

# convert the object into a dict
action_status_dict = action_status_instance.to_dict()
# create an instance of ActionStatus from a dict
action_status_from_dict = ActionStatus.from_dict(action_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


