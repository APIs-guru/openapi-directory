# UpdateNetworkWebhooksHttpServerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | A name for easy reference to the HTTP server | [optional] 
**payload_template** | [**UpdateNetworkWebhooksHttpServerRequestPayloadTemplate**](UpdateNetworkWebhooksHttpServerRequestPayloadTemplate.md) |  | [optional] 
**shared_secret** | **str** | A shared secret that will be included in POSTs sent to the HTTP server. This secret can be used to verify that the request was sent by Meraki. | [optional] 

## Example

```python
from openapi_client.models.update_network_webhooks_http_server_request import UpdateNetworkWebhooksHttpServerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWebhooksHttpServerRequest from a JSON string
update_network_webhooks_http_server_request_instance = UpdateNetworkWebhooksHttpServerRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWebhooksHttpServerRequest.to_json())

# convert the object into a dict
update_network_webhooks_http_server_request_dict = update_network_webhooks_http_server_request_instance.to_dict()
# create an instance of UpdateNetworkWebhooksHttpServerRequest from a dict
update_network_webhooks_http_server_request_from_dict = UpdateNetworkWebhooksHttpServerRequest.from_dict(update_network_webhooks_http_server_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


