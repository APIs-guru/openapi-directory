# SubscriptionDiagnosticSettingsResource

The subscription diagnostic setting resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SubscriptionDiagnosticSettings**](SubscriptionDiagnosticSettings.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Location of the resource | [optional] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_diagnostic_settings_resource import SubscriptionDiagnosticSettingsResource

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionDiagnosticSettingsResource from a JSON string
subscription_diagnostic_settings_resource_instance = SubscriptionDiagnosticSettingsResource.from_json(json)
# print the JSON string representation of the object
print(SubscriptionDiagnosticSettingsResource.to_json())

# convert the object into a dict
subscription_diagnostic_settings_resource_dict = subscription_diagnostic_settings_resource_instance.to_dict()
# create an instance of SubscriptionDiagnosticSettingsResource from a dict
subscription_diagnostic_settings_resource_from_dict = SubscriptionDiagnosticSettingsResource.from_dict(subscription_diagnostic_settings_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


