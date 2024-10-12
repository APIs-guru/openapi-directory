# WebhookActivityResponse

Session activity list response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[WebhookActivityEntry]**](WebhookActivityEntry.md) |  | [optional] 
**response_status** | **int** | Http status code of the response. | [optional] 
**returned_results** | **int** | Number of results returned.  | [optional] 
**total_results** | **int** | Total results found. | [optional] 

## Example

```python
from openapi_client.models.webhook_activity_response import WebhookActivityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookActivityResponse from a JSON string
webhook_activity_response_instance = WebhookActivityResponse.from_json(json)
# print the JSON string representation of the object
print(WebhookActivityResponse.to_json())

# convert the object into a dict
webhook_activity_response_dict = webhook_activity_response_instance.to_dict()
# create an instance of WebhookActivityResponse from a dict
webhook_activity_response_from_dict = WebhookActivityResponse.from_dict(webhook_activity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


