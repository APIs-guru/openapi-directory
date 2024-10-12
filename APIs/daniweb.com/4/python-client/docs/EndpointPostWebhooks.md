# EndpointPostWebhooks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Webhook**](Webhook.md) |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_webhooks import EndpointPostWebhooks

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostWebhooks from a JSON string
endpoint_post_webhooks_instance = EndpointPostWebhooks.from_json(json)
# print the JSON string representation of the object
print(EndpointPostWebhooks.to_json())

# convert the object into a dict
endpoint_post_webhooks_dict = endpoint_post_webhooks_instance.to_dict()
# create an instance of EndpointPostWebhooks from a dict
endpoint_post_webhooks_from_dict = EndpointPostWebhooks.from_dict(endpoint_post_webhooks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


