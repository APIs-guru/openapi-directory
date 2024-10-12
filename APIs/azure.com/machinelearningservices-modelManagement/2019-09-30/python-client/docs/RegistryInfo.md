# RegistryInfo

Contains registry information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location. | 
**password** | **str** | The password. | 
**user** | **str** | The user. | 

## Example

```python
from openapi_client.models.registry_info import RegistryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryInfo from a JSON string
registry_info_instance = RegistryInfo.from_json(json)
# print the JSON string representation of the object
print(RegistryInfo.to_json())

# convert the object into a dict
registry_info_dict = registry_info_instance.to_dict()
# create an instance of RegistryInfo from a dict
registry_info_from_dict = RegistryInfo.from_dict(registry_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


