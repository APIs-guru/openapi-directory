# AddActionSendRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **str** |  | 
**html** | **str** |  | [optional] 
**key** | **str** |  | 
**subject** | **str** |  | 
**text** | **str** |  | [optional] 
**to** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.add_action_send_request_config import AddActionSendRequestConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionSendRequestConfig from a JSON string
add_action_send_request_config_instance = AddActionSendRequestConfig.from_json(json)
# print the JSON string representation of the object
print(AddActionSendRequestConfig.to_json())

# convert the object into a dict
add_action_send_request_config_dict = add_action_send_request_config_instance.to_dict()
# create an instance of AddActionSendRequestConfig from a dict
add_action_send_request_config_from_dict = AddActionSendRequestConfig.from_dict(add_action_send_request_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


