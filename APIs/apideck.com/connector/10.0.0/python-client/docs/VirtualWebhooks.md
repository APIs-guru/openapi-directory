# VirtualWebhooks

Virtual webhook config for the connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_rate** | [**RequestRate**](RequestRate.md) |  | 
**resources** | **object** | The resources that will be requested from downstream. | [optional] 

## Example

```python
from openapi_client.models.virtual_webhooks import VirtualWebhooks

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualWebhooks from a JSON string
virtual_webhooks_instance = VirtualWebhooks.from_json(json)
# print the JSON string representation of the object
print(VirtualWebhooks.to_json())

# convert the object into a dict
virtual_webhooks_dict = virtual_webhooks_instance.to_dict()
# create an instance of VirtualWebhooks from a dict
virtual_webhooks_from_dict = VirtualWebhooks.from_dict(virtual_webhooks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


