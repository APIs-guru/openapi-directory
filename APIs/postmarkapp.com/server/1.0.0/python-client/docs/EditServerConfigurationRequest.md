# EditServerConfigurationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounce_hook_url** | **str** |  | [optional] 
**click_hook_url** | **str** | Webhook url allowing real-time notification when tracked links are clicked. | [optional] 
**color** | **str** |  | [optional] 
**delivery_hook_url** | **str** |  | [optional] 
**inbound_domain** | **str** |  | [optional] 
**inbound_hook_url** | **str** |  | [optional] 
**inbound_spam_threshold** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**open_hook_url** | **str** |  | [optional] 
**post_first_open_only** | **bool** |  | [optional] 
**raw_email_enabled** | **bool** |  | [optional] 
**smtp_api_activated** | **bool** |  | [optional] 
**track_links** | **str** |  | [optional] 
**track_opens** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.edit_server_configuration_request import EditServerConfigurationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EditServerConfigurationRequest from a JSON string
edit_server_configuration_request_instance = EditServerConfigurationRequest.from_json(json)
# print the JSON string representation of the object
print(EditServerConfigurationRequest.to_json())

# convert the object into a dict
edit_server_configuration_request_dict = edit_server_configuration_request_instance.to_dict()
# create an instance of EditServerConfigurationRequest from a dict
edit_server_configuration_request_from_dict = EditServerConfigurationRequest.from_dict(edit_server_configuration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


