# SwitchProtectionInputProperties

Switch protection input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_specific_details** | [**SwitchProtectionProviderSpecificInput**](SwitchProtectionProviderSpecificInput.md) |  | [optional] 
**replication_protected_item_name** | **str** | The unique replication protected item name. | [optional] 

## Example

```python
from openapi_client.models.switch_protection_input_properties import SwitchProtectionInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SwitchProtectionInputProperties from a JSON string
switch_protection_input_properties_instance = SwitchProtectionInputProperties.from_json(json)
# print the JSON string representation of the object
print(SwitchProtectionInputProperties.to_json())

# convert the object into a dict
switch_protection_input_properties_dict = switch_protection_input_properties_instance.to_dict()
# create an instance of SwitchProtectionInputProperties from a dict
switch_protection_input_properties_from_dict = SwitchProtectionInputProperties.from_dict(switch_protection_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


