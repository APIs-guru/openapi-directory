# Manifest

The manifest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**always_routable** | **bool** | A value indicating whether the manifest is always routable by all subscriptions. | [optional] 
**display_name** | **str** | The display name. | [optional] 
**enabled** | **bool** | A value indicating whether this resource provider is enabled. | [optional] 
**extension_collection** | [**ExtensionCollectionDefinition**](ExtensionCollectionDefinition.md) |  | [optional] 
**linked_notification_rules** | [**FanoutLinkedNotificationRuleList**](FanoutLinkedNotificationRuleList.md) |  | [optional] 
**metadata** | **object** | The metadata. | [optional] 
**name** | **str** | The unique identifier of the registration. | [optional] 
**namespace** | **str** | The namespace. | [optional] 
**provider_authorization** | [**ResourceProviderAuthorization**](ResourceProviderAuthorization.md) |  | [optional] 
**provider_location** | **str** | The location of the provider. | [optional] 
**provider_type** | [**ResourceProviderType**](ResourceProviderType.md) |  | [optional] 
**provisioning_state** | [**ManifestProvisioningState**](ManifestProvisioningState.md) |  | [optional] 
**resource_group_name** | **str** | The name of the resource group. | [optional] 
**resource_hydration_accounts** | [**AzureResourceHydrationAccountList**](AzureResourceHydrationAccountList.md) |  | [optional] 
**resource_location** | **str** | The location of the resource. | [optional] 
**resource_tags** | **object** | The resource tags. | [optional] 
**resource_types** | [**ResourceTypeList**](ResourceTypeList.md) |  | [optional] 
**routing_resource_manager_type** | **str** | Resource manager type. | [optional] 
**subscription_id** | **str** | The subscription ID under which RP is registered. | [optional] 

## Example

```python
from openapi_client.models.manifest import Manifest

# TODO update the JSON string below
json = "{}"
# create an instance of Manifest from a JSON string
manifest_instance = Manifest.from_json(json)
# print the JSON string representation of the object
print(Manifest.to_json())

# convert the object into a dict
manifest_dict = manifest_instance.to_dict()
# create an instance of Manifest from a dict
manifest_from_dict = Manifest.from_dict(manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


