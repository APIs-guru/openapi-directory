# SubscriptionListSecrets200Response

Subscription keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_key** | **str** | Subscription primary key. | [optional] 
**secondary_key** | **str** | Subscription secondary key. | [optional] 

## Example

```python
from openapi_client.models.subscription_list_secrets200_response import SubscriptionListSecrets200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionListSecrets200Response from a JSON string
subscription_list_secrets200_response_instance = SubscriptionListSecrets200Response.from_json(json)
# print the JSON string representation of the object
print(SubscriptionListSecrets200Response.to_json())

# convert the object into a dict
subscription_list_secrets200_response_dict = subscription_list_secrets200_response_instance.to_dict()
# create an instance of SubscriptionListSecrets200Response from a dict
subscription_list_secrets200_response_from_dict = SubscriptionListSecrets200Response.from_dict(subscription_list_secrets200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


