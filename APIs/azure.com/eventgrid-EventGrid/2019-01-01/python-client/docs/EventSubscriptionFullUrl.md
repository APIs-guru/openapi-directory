# EventSubscriptionFullUrl

Full endpoint url of an event subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_url** | **str** | The URL that represents the endpoint of the destination of an event subscription. | [optional] 

## Example

```python
from openapi_client.models.event_subscription_full_url import EventSubscriptionFullUrl

# TODO update the JSON string below
json = "{}"
# create an instance of EventSubscriptionFullUrl from a JSON string
event_subscription_full_url_instance = EventSubscriptionFullUrl.from_json(json)
# print the JSON string representation of the object
print(EventSubscriptionFullUrl.to_json())

# convert the object into a dict
event_subscription_full_url_dict = event_subscription_full_url_instance.to_dict()
# create an instance of EventSubscriptionFullUrl from a dict
event_subscription_full_url_from_dict = EventSubscriptionFullUrl.from_dict(event_subscription_full_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


