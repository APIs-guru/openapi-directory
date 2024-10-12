# SoftwareUpdateConfiguration

Software update configuration properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**properties** | [**SoftwareUpdateConfigurationProperties**](SoftwareUpdateConfigurationProperties.md) |  | 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.software_update_configuration import SoftwareUpdateConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareUpdateConfiguration from a JSON string
software_update_configuration_instance = SoftwareUpdateConfiguration.from_json(json)
# print the JSON string representation of the object
print(SoftwareUpdateConfiguration.to_json())

# convert the object into a dict
software_update_configuration_dict = software_update_configuration_instance.to_dict()
# create an instance of SoftwareUpdateConfiguration from a dict
software_update_configuration_from_dict = SoftwareUpdateConfiguration.from_dict(software_update_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


