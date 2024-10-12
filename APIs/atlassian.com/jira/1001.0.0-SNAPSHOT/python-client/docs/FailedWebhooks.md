# FailedWebhooks

A page of failed webhooks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_results** | **int** | The maximum number of items on the page. If the list of values is shorter than this number, then there are no more pages. | 
**next** | **str** | The URL to the next page of results. Present only if the request returned at least one result.The next page may be empty at the time of receiving the response, but new failed webhooks may appear in time. You can save the URL to the next page and query for new results periodically (for example, every hour). | [optional] 
**values** | [**List[FailedWebhook]**](FailedWebhook.md) | The list of webhooks. | 

## Example

```python
from openapi_client.models.failed_webhooks import FailedWebhooks

# TODO update the JSON string below
json = "{}"
# create an instance of FailedWebhooks from a JSON string
failed_webhooks_instance = FailedWebhooks.from_json(json)
# print the JSON string representation of the object
print(FailedWebhooks.to_json())

# convert the object into a dict
failed_webhooks_dict = failed_webhooks_instance.to_dict()
# create an instance of FailedWebhooks from a dict
failed_webhooks_from_dict = FailedWebhooks.from_dict(failed_webhooks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


