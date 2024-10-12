# ModernSubscriptionCreationParameters

The parameters required to create a new subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_center** | **str** | If set, the cost center will show up on the Azure usage and charges file. | [optional] 
**display_name** | **str** | The friendly name of the subscription. | 
**management_group_id** | **str** | The identifier of the management group to which this subscription will be associated. | [optional] 
**owner** | [**AdPrincipal**](AdPrincipal.md) |  | [optional] 
**sku_id** | **str** | The SKU ID of the Azure plan. Azure plan determines the pricing and service-level agreement of the subscription.  Use 001 for Microsoft Azure Plan and 002 for Microsoft Azure Plan for DevTest. | 

## Example

```python
from openapi_client.models.modern_subscription_creation_parameters import ModernSubscriptionCreationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ModernSubscriptionCreationParameters from a JSON string
modern_subscription_creation_parameters_instance = ModernSubscriptionCreationParameters.from_json(json)
# print the JSON string representation of the object
print(ModernSubscriptionCreationParameters.to_json())

# convert the object into a dict
modern_subscription_creation_parameters_dict = modern_subscription_creation_parameters_instance.to_dict()
# create an instance of ModernSubscriptionCreationParameters from a dict
modern_subscription_creation_parameters_from_dict = ModernSubscriptionCreationParameters.from_dict(modern_subscription_creation_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


