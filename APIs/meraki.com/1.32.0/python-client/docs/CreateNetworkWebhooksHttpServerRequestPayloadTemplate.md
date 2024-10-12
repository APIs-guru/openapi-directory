# CreateNetworkWebhooksHttpServerRequestPayloadTemplate

The payload template to use when posting data to the HTTP server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the payload template. | [optional] 
**payload_template_id** | **str** | The ID of the payload template. Defaults to &#39;wpt_00001&#39; for the Meraki template. For Meraki-included templates: for the Webex (included) template use &#39;wpt_00002&#39;; for the Slack (included) template use &#39;wpt_00003&#39;; for the Microsoft Teams (included) template use &#39;wpt_00004&#39;; for the ServiceNow (included) template use &#39;wpt_00006&#39; | [optional] 

## Example

```python
from openapi_client.models.create_network_webhooks_http_server_request_payload_template import CreateNetworkWebhooksHttpServerRequestPayloadTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkWebhooksHttpServerRequestPayloadTemplate from a JSON string
create_network_webhooks_http_server_request_payload_template_instance = CreateNetworkWebhooksHttpServerRequestPayloadTemplate.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkWebhooksHttpServerRequestPayloadTemplate.to_json())

# convert the object into a dict
create_network_webhooks_http_server_request_payload_template_dict = create_network_webhooks_http_server_request_payload_template_instance.to_dict()
# create an instance of CreateNetworkWebhooksHttpServerRequestPayloadTemplate from a dict
create_network_webhooks_http_server_request_payload_template_from_dict = CreateNetworkWebhooksHttpServerRequestPayloadTemplate.from_dict(create_network_webhooks_http_server_request_payload_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


