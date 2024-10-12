# DisableProtectionInputProperties

Disable protection input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_protection_reason** | **str** | Disable protection reason. It can have values NotSpecified/MigrationComplete. | [optional] 
**replication_provider_input** | [**DisableProtectionProviderSpecificInput**](DisableProtectionProviderSpecificInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.disable_protection_input_properties import DisableProtectionInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DisableProtectionInputProperties from a JSON string
disable_protection_input_properties_instance = DisableProtectionInputProperties.from_json(json)
# print the JSON string representation of the object
print(DisableProtectionInputProperties.to_json())

# convert the object into a dict
disable_protection_input_properties_dict = disable_protection_input_properties_instance.to_dict()
# create an instance of DisableProtectionInputProperties from a dict
disable_protection_input_properties_from_dict = DisableProtectionInputProperties.from_dict(disable_protection_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


