# ConfigsResponseResult

List of configurations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configs** | [**List[Config]**](Config.md) |  | 

## Example

```python
from openapi_client.models.configs_response_result import ConfigsResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigsResponseResult from a JSON string
configs_response_result_instance = ConfigsResponseResult.from_json(json)
# print the JSON string representation of the object
print(ConfigsResponseResult.to_json())

# convert the object into a dict
configs_response_result_dict = configs_response_result_instance.to_dict()
# create an instance of ConfigsResponseResult from a dict
configs_response_result_from_dict = ConfigsResponseResult.from_dict(configs_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


