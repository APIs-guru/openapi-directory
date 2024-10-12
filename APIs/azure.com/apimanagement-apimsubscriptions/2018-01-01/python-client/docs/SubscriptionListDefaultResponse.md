# SubscriptionListDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**SubscriptionListDefaultResponseError**](SubscriptionListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscription_list_default_response import SubscriptionListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionListDefaultResponse from a JSON string
subscription_list_default_response_instance = SubscriptionListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(SubscriptionListDefaultResponse.to_json())

# convert the object into a dict
subscription_list_default_response_dict = subscription_list_default_response_instance.to_dict()
# create an instance of SubscriptionListDefaultResponse from a dict
subscription_list_default_response_from_dict = SubscriptionListDefaultResponse.from_dict(subscription_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


