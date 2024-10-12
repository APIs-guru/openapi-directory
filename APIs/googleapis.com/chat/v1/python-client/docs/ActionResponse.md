# ActionResponse

Parameters that a Chat app can use to configure how its response is posted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dialog_action** | [**DialogAction**](DialogAction.md) |  | [optional] 
**type** | **str** | Input only. The type of Chat app response. | [optional] 
**updated_widget** | [**UpdatedWidget**](UpdatedWidget.md) |  | [optional] 
**url** | **str** | Input only. URL for users to authenticate or configure. (Only for &#x60;REQUEST_CONFIG&#x60; response types.) | [optional] 

## Example

```python
from openapi_client.models.action_response import ActionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ActionResponse from a JSON string
action_response_instance = ActionResponse.from_json(json)
# print the JSON string representation of the object
print(ActionResponse.to_json())

# convert the object into a dict
action_response_dict = action_response_instance.to_dict()
# create an instance of ActionResponse from a dict
action_response_from_dict = ActionResponse.from_dict(action_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


