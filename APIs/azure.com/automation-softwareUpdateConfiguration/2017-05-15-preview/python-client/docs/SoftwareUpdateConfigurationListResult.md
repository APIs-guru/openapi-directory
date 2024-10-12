# SoftwareUpdateConfigurationListResult

result of listing all software update configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SoftwareUpdateConfigurationCollectionItem]**](SoftwareUpdateConfigurationCollectionItem.md) | outer object returned when listing all software update configurations | [optional] 

## Example

```python
from openapi_client.models.software_update_configuration_list_result import SoftwareUpdateConfigurationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareUpdateConfigurationListResult from a JSON string
software_update_configuration_list_result_instance = SoftwareUpdateConfigurationListResult.from_json(json)
# print the JSON string representation of the object
print(SoftwareUpdateConfigurationListResult.to_json())

# convert the object into a dict
software_update_configuration_list_result_dict = software_update_configuration_list_result_instance.to_dict()
# create an instance of SoftwareUpdateConfigurationListResult from a dict
software_update_configuration_list_result_from_dict = SoftwareUpdateConfigurationListResult.from_dict(software_update_configuration_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


