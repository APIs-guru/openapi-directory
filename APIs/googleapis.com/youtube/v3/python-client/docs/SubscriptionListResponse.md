# SubscriptionListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**event_id** | **str** | Serialized EventId of the request which produced this response. | [optional] 
**items** | [**List[Subscription]**](Subscription.md) | A list of subscriptions that match the request criteria. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#subscriptionListResponse\&quot;. | [optional] [default to 'youtube#subscriptionListResponse']
**next_page_token** | **str** | The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. | [optional] 
**page_info** | [**PageInfo**](PageInfo.md) |  | [optional] 
**prev_page_token** | **str** | The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. | [optional] 
**token_pagination** | **object** | Stub token pagination template to suppress results. | [optional] 
**visitor_id** | **str** | The visitorId identifies the visitor. | [optional] 

## Example

```python
from openapi_client.models.subscription_list_response import SubscriptionListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionListResponse from a JSON string
subscription_list_response_instance = SubscriptionListResponse.from_json(json)
# print the JSON string representation of the object
print(SubscriptionListResponse.to_json())

# convert the object into a dict
subscription_list_response_dict = subscription_list_response_instance.to_dict()
# create an instance of SubscriptionListResponse from a dict
subscription_list_response_from_dict = SubscriptionListResponse.from_dict(subscription_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


