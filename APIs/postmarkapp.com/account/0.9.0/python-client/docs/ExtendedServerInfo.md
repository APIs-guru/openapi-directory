# ExtendedServerInfo



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_tokens** | **List[str]** |  | [optional] 
**bounce_hook_url** | **str** |  | [optional] 
**click_hook_url** | **str** |  | [optional] 
**color** | **str** |  | [optional] 
**delivery_hook_url** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**inbound_address** | **str** |  | [optional] 
**inbound_domain** | **str** |  | [optional] 
**inbound_hash** | **str** |  | [optional] 
**inbound_hook_url** | **str** |  | [optional] 
**inbound_spam_threshold** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**open_hook_url** | **str** |  | [optional] 
**post_first_open_only** | **bool** |  | [optional] 
**raw_email_enabled** | **bool** |  | [optional] 
**server_link** | **str** |  | [optional] 
**smtp_api_activated** | **bool** |  | [optional] 
**track_links** | **str** |  | [optional] 
**track_opens** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.extended_server_info import ExtendedServerInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedServerInfo from a JSON string
extended_server_info_instance = ExtendedServerInfo.from_json(json)
# print the JSON string representation of the object
print(ExtendedServerInfo.to_json())

# convert the object into a dict
extended_server_info_dict = extended_server_info_instance.to_dict()
# create an instance of ExtendedServerInfo from a dict
extended_server_info_from_dict = ExtendedServerInfo.from_dict(extended_server_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


