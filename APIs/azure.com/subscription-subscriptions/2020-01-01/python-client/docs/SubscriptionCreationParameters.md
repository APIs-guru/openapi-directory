# SubscriptionCreationParameters

Subscription Creation Parameters required to create a new Azure subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the subscription. | [optional] 
**management_group_id** | **str** | The Management Group Id. | [optional] 
**offer_type** | **str** | The offer type of the subscription. For example, MS-AZR-0017P (EnterpriseAgreement) and MS-AZR-0148P (EnterpriseAgreement devTest) are available. Only valid when creating a subscription in a enrollment account scope. | [optional] 
**owners** | [**List[AdPrincipal]**](AdPrincipal.md) | The list of principals that should be granted Owner access on the subscription. Principals should be of type User, Service Principal or Security Group. | [optional] 

## Example

```python
from openapi_client.models.subscription_creation_parameters import SubscriptionCreationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionCreationParameters from a JSON string
subscription_creation_parameters_instance = SubscriptionCreationParameters.from_json(json)
# print the JSON string representation of the object
print(SubscriptionCreationParameters.to_json())

# convert the object into a dict
subscription_creation_parameters_dict = subscription_creation_parameters_instance.to_dict()
# create an instance of SubscriptionCreationParameters from a dict
subscription_creation_parameters_from_dict = SubscriptionCreationParameters.from_dict(subscription_creation_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


