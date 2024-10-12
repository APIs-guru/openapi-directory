# EndpointGetWebhooks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Webhook]**](Webhook.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_webhooks import EndpointGetWebhooks

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetWebhooks from a JSON string
endpoint_get_webhooks_instance = EndpointGetWebhooks.from_json(json)
# print the JSON string representation of the object
print(EndpointGetWebhooks.to_json())

# convert the object into a dict
endpoint_get_webhooks_dict = endpoint_get_webhooks_instance.to_dict()
# create an instance of EndpointGetWebhooks from a dict
endpoint_get_webhooks_from_dict = EndpointGetWebhooks.from_dict(endpoint_get_webhooks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


