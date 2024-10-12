# DelegatedProviderOfferProperties

Properties for an delegated provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility_state** | [**AccessibilityState**](AccessibilityState.md) |  | [optional] 
**delegated_offer_id** | **str** | The delegated offer identifier. | [optional] 
**description** | **str** | Description of offer. | [optional] 
**display_name** | **str** | Display name of offer. | [optional] 
**external_reference_id** | **str** | External reference identifier. | [optional] 
**subscription_count** | **int** | Current subscription count. | [optional] 

## Example

```python
from openapi_client.models.delegated_provider_offer_properties import DelegatedProviderOfferProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DelegatedProviderOfferProperties from a JSON string
delegated_provider_offer_properties_instance = DelegatedProviderOfferProperties.from_json(json)
# print the JSON string representation of the object
print(DelegatedProviderOfferProperties.to_json())

# convert the object into a dict
delegated_provider_offer_properties_dict = delegated_provider_offer_properties_instance.to_dict()
# create an instance of DelegatedProviderOfferProperties from a dict
delegated_provider_offer_properties_from_dict = DelegatedProviderOfferProperties.from_dict(delegated_provider_offer_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


