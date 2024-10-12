# SubscriptionListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_list** | [**SubscriptionList**](SubscriptionList.md) |  | [optional] 

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


