# ExternalSubscriptionProperties

The properties of a ExternalSubscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_info** | [**ConnectorCollectionInfo**](ConnectorCollectionInfo.md) |  | [optional] 
**display_name** | **str** | ExternalSubscription DisplayName | [optional] [readonly] 
**external_billing_account_id** | **str** | Parent ExternalBillingAccountId | [optional] [readonly] 
**management_group_id** | **str** | Assigned ManagementGroupId | [optional] [readonly] 
**provider_account_id** | **str** | Provider AccountId (eg AWS Linked Account number) | [optional] [readonly] 
**provider_billing_account_id** | **str** | Provider BillingAccountId (eg AWS Consolidated Account number) | [optional] [readonly] 

## Example

```python
from openapi_client.models.external_subscription_properties import ExternalSubscriptionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalSubscriptionProperties from a JSON string
external_subscription_properties_instance = ExternalSubscriptionProperties.from_json(json)
# print the JSON string representation of the object
print(ExternalSubscriptionProperties.to_json())

# convert the object into a dict
external_subscription_properties_dict = external_subscription_properties_instance.to_dict()
# create an instance of ExternalSubscriptionProperties from a dict
external_subscription_properties_from_dict = ExternalSubscriptionProperties.from_dict(external_subscription_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


