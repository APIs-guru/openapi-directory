# AddActionDaemonRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** |  | 
**daemon** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.add_action_daemon_request_config import AddActionDaemonRequestConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionDaemonRequestConfig from a JSON string
add_action_daemon_request_config_instance = AddActionDaemonRequestConfig.from_json(json)
# print the JSON string representation of the object
print(AddActionDaemonRequestConfig.to_json())

# convert the object into a dict
add_action_daemon_request_config_dict = add_action_daemon_request_config_instance.to_dict()
# create an instance of AddActionDaemonRequestConfig from a dict
add_action_daemon_request_config_from_dict = AddActionDaemonRequestConfig.from_dict(add_action_daemon_request_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


