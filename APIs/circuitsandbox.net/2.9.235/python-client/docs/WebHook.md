# WebHook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **float** | The time when this WebHook was created. This does not necessary mean the time when an manifest file was created. | [optional] 
**filter** | **List[str]** | An optional list of filter parameters for this webhook. | [optional] 
**id** | **str** | The unique identifier for this webhook. Can be used later to unregister the webhook. | [optional] 
**subscription_ids** | **List[str]** | The optional list of userids for which this webhook is subscribed, i.e. presence events for the user are forwarded to the WebHook callback URL. | [optional] 
**type** | **str** | The type of a WebHook. This can either be MANUAL or EXTENSION. While manual WebHooks are only temporary and for development only use, permanent ones (EXTENSION) will bemanaged by the system. | [optional] 
**url** | **str** | The callback URL of this webhook. | [optional] 
**user_id** | **str** | The user ID for which this webhook is subscribed, i.e. events for this user are forwarded to the WebHook callback URL. | [optional] 

## Example

```python
from openapi_client.models.web_hook import WebHook

# TODO update the JSON string below
json = "{}"
# create an instance of WebHook from a JSON string
web_hook_instance = WebHook.from_json(json)
# print the JSON string representation of the object
print(WebHook.to_json())

# convert the object into a dict
web_hook_dict = web_hook_instance.to_dict()
# create an instance of WebHook from a dict
web_hook_from_dict = WebHook.from_dict(web_hook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


