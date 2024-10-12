# WebChatSite

A site for the Webchat channel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_preview** | **bool** | Whether this site is enabled for preview versions of Webchat | 
**is_enabled** | **bool** | Whether this site is enabled for DirectLine channel | 
**key** | **str** | Primary key. Value only returned through POST to the action Channel List API, otherwise empty. | [optional] [readonly] 
**key2** | **str** | Secondary key. Value only returned through POST to the action Channel List API, otherwise empty. | [optional] [readonly] 
**site_id** | **str** | Site Id | [optional] [readonly] 
**site_name** | **str** | Site name | 

## Example

```python
from openapi_client.models.web_chat_site import WebChatSite

# TODO update the JSON string below
json = "{}"
# create an instance of WebChatSite from a JSON string
web_chat_site_instance = WebChatSite.from_json(json)
# print the JSON string representation of the object
print(WebChatSite.to_json())

# convert the object into a dict
web_chat_site_dict = web_chat_site_instance.to_dict()
# create an instance of WebChatSite from a dict
web_chat_site_from_dict = WebChatSite.from_dict(web_chat_site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


