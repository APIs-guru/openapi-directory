# ConfigurationParameterList

Represents the list for configuration parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ConfigurationParameter]**](ConfigurationParameter.md) | Represents the list for configuration parameters. | [optional] 

## Example

```python
from openapi_client.models.configuration_parameter_list import ConfigurationParameterList

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationParameterList from a JSON string
configuration_parameter_list_instance = ConfigurationParameterList.from_json(json)
# print the JSON string representation of the object
print(ConfigurationParameterList.to_json())

# convert the object into a dict
configuration_parameter_list_dict = configuration_parameter_list_instance.to_dict()
# create an instance of ConfigurationParameterList from a dict
configuration_parameter_list_from_dict = ConfigurationParameterList.from_dict(configuration_parameter_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


