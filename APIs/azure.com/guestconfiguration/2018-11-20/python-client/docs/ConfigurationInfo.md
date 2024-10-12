# ConfigurationInfo

Information about the configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the configuration. | [optional] [readonly] 
**version** | **str** | Version of the configuration. | [optional] [readonly] 

## Example

```python
from openapi_client.models.configuration_info import ConfigurationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationInfo from a JSON string
configuration_info_instance = ConfigurationInfo.from_json(json)
# print the JSON string representation of the object
print(ConfigurationInfo.to_json())

# convert the object into a dict
configuration_info_dict = configuration_info_instance.to_dict()
# create an instance of ConfigurationInfo from a dict
configuration_info_from_dict = ConfigurationInfo.from_dict(configuration_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


