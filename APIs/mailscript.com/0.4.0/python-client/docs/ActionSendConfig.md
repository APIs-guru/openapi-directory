# ActionSendConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**html** | **str** |  | [optional] 
**subject** | **str** |  | 
**text** | **str** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.action_send_config import ActionSendConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ActionSendConfig from a JSON string
action_send_config_instance = ActionSendConfig.from_json(json)
# print the JSON string representation of the object
print(ActionSendConfig.to_json())

# convert the object into a dict
action_send_config_dict = action_send_config_instance.to_dict()
# create an instance of ActionSendConfig from a dict
action_send_config_from_dict = ActionSendConfig.from_dict(action_send_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


