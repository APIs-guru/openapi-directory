# ProviderShareSubscription

A provider side share subscription data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProviderShareSubscriptionProperties**](ProviderShareSubscriptionProperties.md) |  | [optional] 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.provider_share_subscription import ProviderShareSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderShareSubscription from a JSON string
provider_share_subscription_instance = ProviderShareSubscription.from_json(json)
# print the JSON string representation of the object
print(ProviderShareSubscription.to_json())

# convert the object into a dict
provider_share_subscription_dict = provider_share_subscription_instance.to_dict()
# create an instance of ProviderShareSubscription from a dict
provider_share_subscription_from_dict = ProviderShareSubscription.from_dict(provider_share_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


