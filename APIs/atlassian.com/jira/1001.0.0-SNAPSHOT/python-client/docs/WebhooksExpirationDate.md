# WebhooksExpirationDate

The date the refreshed webhooks expire.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date** | **int** | The expiration date of all the refreshed webhooks. | [readonly] 

## Example

```python
from openapi_client.models.webhooks_expiration_date import WebhooksExpirationDate

# TODO update the JSON string below
json = "{}"
# create an instance of WebhooksExpirationDate from a JSON string
webhooks_expiration_date_instance = WebhooksExpirationDate.from_json(json)
# print the JSON string representation of the object
print(WebhooksExpirationDate.to_json())

# convert the object into a dict
webhooks_expiration_date_dict = webhooks_expiration_date_instance.to_dict()
# create an instance of WebhooksExpirationDate from a dict
webhooks_expiration_date_from_dict = WebhooksExpirationDate.from_dict(webhooks_expiration_date_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


