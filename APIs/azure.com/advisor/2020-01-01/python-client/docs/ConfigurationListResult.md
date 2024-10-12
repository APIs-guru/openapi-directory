# ConfigurationListResult

The list of Advisor configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of configurations. | [optional] 
**value** | [**List[ConfigData]**](ConfigData.md) | The list of configurations. | [optional] 

## Example

```python
from openapi_client.models.configuration_list_result import ConfigurationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationListResult from a JSON string
configuration_list_result_instance = ConfigurationListResult.from_json(json)
# print the JSON string representation of the object
print(ConfigurationListResult.to_json())

# convert the object into a dict
configuration_list_result_dict = configuration_list_result_instance.to_dict()
# create an instance of ConfigurationListResult from a dict
configuration_list_result_from_dict = ConfigurationListResult.from_dict(configuration_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


