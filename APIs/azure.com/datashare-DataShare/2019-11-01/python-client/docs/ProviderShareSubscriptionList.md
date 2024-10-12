# ProviderShareSubscriptionList

List response for get ShareSubscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The Url of next result page. | [optional] 
**value** | [**List[ProviderShareSubscription]**](ProviderShareSubscription.md) | Collection of items of type DataTransferObjects. | 

## Example

```python
from openapi_client.models.provider_share_subscription_list import ProviderShareSubscriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderShareSubscriptionList from a JSON string
provider_share_subscription_list_instance = ProviderShareSubscriptionList.from_json(json)
# print the JSON string representation of the object
print(ProviderShareSubscriptionList.to_json())

# convert the object into a dict
provider_share_subscription_list_dict = provider_share_subscription_list_instance.to_dict()
# create an instance of ProviderShareSubscriptionList from a dict
provider_share_subscription_list_from_dict = ProviderShareSubscriptionList.from_dict(provider_share_subscription_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


