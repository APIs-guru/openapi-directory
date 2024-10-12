# ApiV1PushSubscriptionPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** |  | 
**subscription** | **str** |  | 

## Example

```python
from openapi_client.models.api_v1_push_subscription_post_request import ApiV1PushSubscriptionPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1PushSubscriptionPostRequest from a JSON string
api_v1_push_subscription_post_request_instance = ApiV1PushSubscriptionPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1PushSubscriptionPostRequest.to_json())

# convert the object into a dict
api_v1_push_subscription_post_request_dict = api_v1_push_subscription_post_request_instance.to_dict()
# create an instance of ApiV1PushSubscriptionPostRequest from a dict
api_v1_push_subscription_post_request_from_dict = ApiV1PushSubscriptionPostRequest.from_dict(api_v1_push_subscription_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


