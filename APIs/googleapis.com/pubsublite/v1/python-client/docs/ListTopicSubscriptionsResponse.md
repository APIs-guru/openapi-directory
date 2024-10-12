# ListTopicSubscriptionsResponse

Response for ListTopicSubscriptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; to retrieve the next page of results. If this field is omitted, there are no more results. | [optional] 
**subscriptions** | **List[str]** | The names of subscriptions attached to the topic. The order of the subscriptions is unspecified. | [optional] 

## Example

```python
from openapi_client.models.list_topic_subscriptions_response import ListTopicSubscriptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTopicSubscriptionsResponse from a JSON string
list_topic_subscriptions_response_instance = ListTopicSubscriptionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTopicSubscriptionsResponse.to_json())

# convert the object into a dict
list_topic_subscriptions_response_dict = list_topic_subscriptions_response_instance.to_dict()
# create an instance of ListTopicSubscriptionsResponse from a dict
list_topic_subscriptions_response_from_dict = ListTopicSubscriptionsResponse.from_dict(list_topic_subscriptions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


