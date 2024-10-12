# SubscriptionProxyOnlyResource

A proxy only azure resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Location of the resource | [optional] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_proxy_only_resource import SubscriptionProxyOnlyResource

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionProxyOnlyResource from a JSON string
subscription_proxy_only_resource_instance = SubscriptionProxyOnlyResource.from_json(json)
# print the JSON string representation of the object
print(SubscriptionProxyOnlyResource.to_json())

# convert the object into a dict
subscription_proxy_only_resource_dict = subscription_proxy_only_resource_instance.to_dict()
# create an instance of SubscriptionProxyOnlyResource from a dict
subscription_proxy_only_resource_from_dict = SubscriptionProxyOnlyResource.from_dict(subscription_proxy_only_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


