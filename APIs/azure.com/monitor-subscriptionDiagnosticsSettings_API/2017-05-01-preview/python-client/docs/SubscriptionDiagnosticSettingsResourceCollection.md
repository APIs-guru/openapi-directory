# SubscriptionDiagnosticSettingsResourceCollection

Represents a collection of subscription diagnostic settings resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SubscriptionDiagnosticSettingsResource]**](SubscriptionDiagnosticSettingsResource.md) | The collection of subscription diagnostic settings resources. | [optional] 

## Example

```python
from openapi_client.models.subscription_diagnostic_settings_resource_collection import SubscriptionDiagnosticSettingsResourceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionDiagnosticSettingsResourceCollection from a JSON string
subscription_diagnostic_settings_resource_collection_instance = SubscriptionDiagnosticSettingsResourceCollection.from_json(json)
# print the JSON string representation of the object
print(SubscriptionDiagnosticSettingsResourceCollection.to_json())

# convert the object into a dict
subscription_diagnostic_settings_resource_collection_dict = subscription_diagnostic_settings_resource_collection_instance.to_dict()
# create an instance of SubscriptionDiagnosticSettingsResourceCollection from a dict
subscription_diagnostic_settings_resource_collection_from_dict = SubscriptionDiagnosticSettingsResourceCollection.from_dict(subscription_diagnostic_settings_resource_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


