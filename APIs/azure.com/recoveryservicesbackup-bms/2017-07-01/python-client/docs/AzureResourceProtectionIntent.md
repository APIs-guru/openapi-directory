# AzureResourceProtectionIntent

IaaS VM specific backup protection intent item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friendly_name** | **str** | Friendly name of the VM represented by this backup item. | [optional] 

## Example

```python
from openapi_client.models.azure_resource_protection_intent import AzureResourceProtectionIntent

# TODO update the JSON string below
json = "{}"
# create an instance of AzureResourceProtectionIntent from a JSON string
azure_resource_protection_intent_instance = AzureResourceProtectionIntent.from_json(json)
# print the JSON string representation of the object
print(AzureResourceProtectionIntent.to_json())

# convert the object into a dict
azure_resource_protection_intent_dict = azure_resource_protection_intent_instance.to_dict()
# create an instance of AzureResourceProtectionIntent from a dict
azure_resource_protection_intent_from_dict = AzureResourceProtectionIntent.from_dict(azure_resource_protection_intent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


