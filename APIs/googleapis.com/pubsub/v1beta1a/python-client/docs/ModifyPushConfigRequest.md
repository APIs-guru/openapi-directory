# ModifyPushConfigRequest

Request for the ModifyPushConfig method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**push_config** | [**PushConfig**](PushConfig.md) |  | [optional] 
**subscription** | **str** | The name of the subscription. | [optional] 

## Example

```python
from openapi_client.models.modify_push_config_request import ModifyPushConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyPushConfigRequest from a JSON string
modify_push_config_request_instance = ModifyPushConfigRequest.from_json(json)
# print the JSON string representation of the object
print(ModifyPushConfigRequest.to_json())

# convert the object into a dict
modify_push_config_request_dict = modify_push_config_request_instance.to_dict()
# create an instance of ModifyPushConfigRequest from a dict
modify_push_config_request_from_dict = ModifyPushConfigRequest.from_dict(modify_push_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


