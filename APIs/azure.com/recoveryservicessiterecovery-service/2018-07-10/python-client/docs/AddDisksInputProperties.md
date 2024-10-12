# AddDisksInputProperties

Add Disks input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_specific_details** | [**AddDisksProviderSpecificInput**](AddDisksProviderSpecificInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_disks_input_properties import AddDisksInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AddDisksInputProperties from a JSON string
add_disks_input_properties_instance = AddDisksInputProperties.from_json(json)
# print the JSON string representation of the object
print(AddDisksInputProperties.to_json())

# convert the object into a dict
add_disks_input_properties_dict = add_disks_input_properties_instance.to_dict()
# create an instance of AddDisksInputProperties from a dict
add_disks_input_properties_from_dict = AddDisksInputProperties.from_dict(add_disks_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


