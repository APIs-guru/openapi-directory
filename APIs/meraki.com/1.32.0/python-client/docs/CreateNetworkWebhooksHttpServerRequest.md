# CreateNetworkWebhooksHttpServerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | A name for easy reference to the HTTP server | 
**payload_template** | [**CreateNetworkWebhooksHttpServerRequestPayloadTemplate**](CreateNetworkWebhooksHttpServerRequestPayloadTemplate.md) |  | [optional] 
**shared_secret** | **str** | A shared secret that will be included in POSTs sent to the HTTP server. This secret can be used to verify that the request was sent by Meraki. | [optional] 
**url** | **str** | The URL of the HTTP server. Once set, cannot be updated. | 

## Example

```python
from openapi_client.models.create_network_webhooks_http_server_request import CreateNetworkWebhooksHttpServerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkWebhooksHttpServerRequest from a JSON string
create_network_webhooks_http_server_request_instance = CreateNetworkWebhooksHttpServerRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkWebhooksHttpServerRequest.to_json())

# convert the object into a dict
create_network_webhooks_http_server_request_dict = create_network_webhooks_http_server_request_instance.to_dict()
# create an instance of CreateNetworkWebhooksHttpServerRequest from a dict
create_network_webhooks_http_server_request_from_dict = CreateNetworkWebhooksHttpServerRequest.from_dict(create_network_webhooks_http_server_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


