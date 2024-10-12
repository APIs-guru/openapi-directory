# ListTopicSubscriptionsResponse

Response for the `ListTopicSubscriptions` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Optional. If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new &#x60;ListTopicSubscriptionsRequest&#x60; to get more subscriptions. | [optional] 
**subscriptions** | **List[str]** | Optional. The names of subscriptions attached to the topic specified in the request. | [optional] 

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


