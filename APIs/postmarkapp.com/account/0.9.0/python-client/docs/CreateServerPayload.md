# CreateServerPayload



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounce_hook_url** | **str** |  | [optional] 
**click_hook_url** | **str** |  | [optional] 
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
from openapi_client.models.create_server_payload import CreateServerPayload

# TODO update the JSON string below
json = "{}"
# create an instance of CreateServerPayload from a JSON string
create_server_payload_instance = CreateServerPayload.from_json(json)
# print the JSON string representation of the object
print(CreateServerPayload.to_json())

# convert the object into a dict
create_server_payload_dict = create_server_payload_instance.to_dict()
# create an instance of CreateServerPayload from a dict
create_server_payload_from_dict = CreateServerPayload.from_dict(create_server_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


