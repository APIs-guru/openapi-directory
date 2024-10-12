# RemoveDisksInputProperties

Remove Disk input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_specific_details** | [**RemoveDisksProviderSpecificInput**](RemoveDisksProviderSpecificInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.remove_disks_input_properties import RemoveDisksInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveDisksInputProperties from a JSON string
remove_disks_input_properties_instance = RemoveDisksInputProperties.from_json(json)
# print the JSON string representation of the object
print(RemoveDisksInputProperties.to_json())

# convert the object into a dict
remove_disks_input_properties_dict = remove_disks_input_properties_instance.to_dict()
# create an instance of RemoveDisksInputProperties from a dict
remove_disks_input_properties_from_dict = RemoveDisksInputProperties.from_dict(remove_disks_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


