# WebhookCollectionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Webhook]**](Webhook.md) |  | [optional] 
**included** | [**List[UserCollectionResponseIncludedInner]**](UserCollectionResponseIncludedInner.md) |  | [optional] 
**response_status** | **int** | Http status code of the response.  | [optional] 
**returned_results** | **int** | Number of results returned. | [optional] 
**total_results** | **int** | Total results found. | [optional] 

## Example

```python
from openapi_client.models.webhook_collection_response import WebhookCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookCollectionResponse from a JSON string
webhook_collection_response_instance = WebhookCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(WebhookCollectionResponse.to_json())

# convert the object into a dict
webhook_collection_response_dict = webhook_collection_response_instance.to_dict()
# create an instance of WebhookCollectionResponse from a dict
webhook_collection_response_from_dict = WebhookCollectionResponse.from_dict(webhook_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


