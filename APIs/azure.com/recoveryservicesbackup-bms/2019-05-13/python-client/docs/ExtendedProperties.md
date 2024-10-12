# ExtendedProperties

Extended Properties for Azure IaasVM Backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_exclusion_properties** | [**DiskExclusionProperties**](DiskExclusionProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.extended_properties import ExtendedProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedProperties from a JSON string
extended_properties_instance = ExtendedProperties.from_json(json)
# print the JSON string representation of the object
print(ExtendedProperties.to_json())

# convert the object into a dict
extended_properties_dict = extended_properties_instance.to_dict()
# create an instance of ExtendedProperties from a dict
extended_properties_from_dict = ExtendedProperties.from_dict(extended_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


