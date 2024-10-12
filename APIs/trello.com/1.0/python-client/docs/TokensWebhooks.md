# TokensWebhooks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_url** | **str** | A valid URL that is reachable with a HEAD request | [optional] 
**description** | **str** | a string with a length from 0 to 16384 | [optional] 
**id_model** | **str** | id of the model to be monitored | [optional] 

## Example

```python
from openapi_client.models.tokens_webhooks import TokensWebhooks

# TODO update the JSON string below
json = "{}"
# create an instance of TokensWebhooks from a JSON string
tokens_webhooks_instance = TokensWebhooks.from_json(json)
# print the JSON string representation of the object
print(TokensWebhooks.to_json())

# convert the object into a dict
tokens_webhooks_dict = tokens_webhooks_instance.to_dict()
# create an instance of TokensWebhooks from a dict
tokens_webhooks_from_dict = TokensWebhooks.from_dict(tokens_webhooks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


