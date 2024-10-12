# ProviderShareSubscriptionProperties

Provider share subscription properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_email** | **str** | Email of the consumer who created the share subscription | [optional] [readonly] 
**consumer_name** | **str** | Name of the consumer who created the share subscription | [optional] [readonly] 
**consumer_tenant_name** | **str** | Tenant name of the consumer who created the share subscription | [optional] [readonly] 
**created_at** | **datetime** | created at | [optional] [readonly] 
**provider_email** | **str** | Email of the provider who created the share | [optional] [readonly] 
**provider_name** | **str** | Name of the provider who created the share | [optional] [readonly] 
**share_subscription_object_id** | **str** | share Subscription Object Id | [optional] [readonly] 
**share_subscription_status** | **str** | Gets the status of share subscription | [optional] [readonly] 
**shared_at** | **datetime** | Shared at | [optional] [readonly] 

## Example

```python
from openapi_client.models.provider_share_subscription_properties import ProviderShareSubscriptionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderShareSubscriptionProperties from a JSON string
provider_share_subscription_properties_instance = ProviderShareSubscriptionProperties.from_json(json)
# print the JSON string representation of the object
print(ProviderShareSubscriptionProperties.to_json())

# convert the object into a dict
provider_share_subscription_properties_dict = provider_share_subscription_properties_instance.to_dict()
# create an instance of ProviderShareSubscriptionProperties from a dict
provider_share_subscription_properties_from_dict = ProviderShareSubscriptionProperties.from_dict(provider_share_subscription_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


