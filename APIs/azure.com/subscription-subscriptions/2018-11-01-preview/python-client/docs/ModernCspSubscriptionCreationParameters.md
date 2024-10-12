# ModernCspSubscriptionCreationParameters

The parameters required to create a new CSP subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The friendly name of the subscription. | 
**reseller_id** | **str** | Reseller ID, basically MPN Id. | [optional] 
**service_provider_id** | **str** | Service provider ID, basically MPN Id. | [optional] 
**sku_id** | **str** | The SKU ID of the Azure plan. Azure plan determines the pricing and service-level agreement of the subscription.  Use 001 for Microsoft Azure Plan and 002 for Microsoft Azure Plan for DevTest. | 

## Example

```python
from openapi_client.models.modern_csp_subscription_creation_parameters import ModernCspSubscriptionCreationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ModernCspSubscriptionCreationParameters from a JSON string
modern_csp_subscription_creation_parameters_instance = ModernCspSubscriptionCreationParameters.from_json(json)
# print the JSON string representation of the object
print(ModernCspSubscriptionCreationParameters.to_json())

# convert the object into a dict
modern_csp_subscription_creation_parameters_dict = modern_csp_subscription_creation_parameters_instance.to_dict()
# create an instance of ModernCspSubscriptionCreationParameters from a dict
modern_csp_subscription_creation_parameters_from_dict = ModernCspSubscriptionCreationParameters.from_dict(modern_csp_subscription_creation_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


