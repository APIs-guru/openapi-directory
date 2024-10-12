# DelegatedProvidersList200ResponseValueInner

List of supported operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delegated_provider_subscription_id** | **str** | Parent DelegatedProvider subscription identifier. | [optional] 
**display_name** | **str** | Subscription name. | [optional] 
**external_reference_id** | **str** | External reference identifier. | [optional] 
**id** | **str** | Fully qualified identifier. | [optional] 
**offer_id** | **str** | Identifier of the offer under the scope of a delegated provider. | [optional] 
**owner** | **str** | Subscription owner. | [optional] 
**routing_resource_manager_type** | **str** | Resource manager type. | [optional] 
**state** | **str** | Subscription notification state. | [optional] 
**subscription_id** | **str** | Subscription identifier. | [optional] 
**tenant_id** | **str** | Directory tenant identifier. | [optional] 

## Example

```python
from openapi_client.models.delegated_providers_list200_response_value_inner import DelegatedProvidersList200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of DelegatedProvidersList200ResponseValueInner from a JSON string
delegated_providers_list200_response_value_inner_instance = DelegatedProvidersList200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(DelegatedProvidersList200ResponseValueInner.to_json())

# convert the object into a dict
delegated_providers_list200_response_value_inner_dict = delegated_providers_list200_response_value_inner_instance.to_dict()
# create an instance of DelegatedProvidersList200ResponseValueInner from a dict
delegated_providers_list200_response_value_inner_from_dict = DelegatedProvidersList200ResponseValueInner.from_dict(delegated_providers_list200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


