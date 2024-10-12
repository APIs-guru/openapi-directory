# EnableProtectionInputProperties

Enable protection input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_id** | **str** | The Policy Id. | [optional] 
**protectable_item_id** | **str** | The protectable item Id. | [optional] 
**provider_specific_details** | [**EnableProtectionProviderSpecificInput**](EnableProtectionProviderSpecificInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.enable_protection_input_properties import EnableProtectionInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EnableProtectionInputProperties from a JSON string
enable_protection_input_properties_instance = EnableProtectionInputProperties.from_json(json)
# print the JSON string representation of the object
print(EnableProtectionInputProperties.to_json())

# convert the object into a dict
enable_protection_input_properties_dict = enable_protection_input_properties_instance.to_dict()
# create an instance of EnableProtectionInputProperties from a dict
enable_protection_input_properties_from_dict = EnableProtectionInputProperties.from_dict(enable_protection_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


