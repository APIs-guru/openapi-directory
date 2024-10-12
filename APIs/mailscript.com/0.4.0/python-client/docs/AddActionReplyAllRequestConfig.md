# AddActionReplyAllRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **str** |  | 
**html** | **str** |  | [optional] 
**key** | **str** |  | 
**text** | **str** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.add_action_reply_all_request_config import AddActionReplyAllRequestConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionReplyAllRequestConfig from a JSON string
add_action_reply_all_request_config_instance = AddActionReplyAllRequestConfig.from_json(json)
# print the JSON string representation of the object
print(AddActionReplyAllRequestConfig.to_json())

# convert the object into a dict
add_action_reply_all_request_config_dict = add_action_reply_all_request_config_instance.to_dict()
# create an instance of AddActionReplyAllRequestConfig from a dict
add_action_reply_all_request_config_from_dict = AddActionReplyAllRequestConfig.from_dict(add_action_reply_all_request_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


