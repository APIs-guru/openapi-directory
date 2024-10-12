# AddActionDaemonRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**AddActionDaemonRequestConfig**](AddActionDaemonRequestConfig.md) |  | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.add_action_daemon_request import AddActionDaemonRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionDaemonRequest from a JSON string
add_action_daemon_request_instance = AddActionDaemonRequest.from_json(json)
# print the JSON string representation of the object
print(AddActionDaemonRequest.to_json())

# convert the object into a dict
add_action_daemon_request_dict = add_action_daemon_request_instance.to_dict()
# create an instance of AddActionDaemonRequest from a dict
add_action_daemon_request_from_dict = AddActionDaemonRequest.from_dict(add_action_daemon_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


