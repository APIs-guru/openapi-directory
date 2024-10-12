# Environment

Message containing environment configuration for a Lighthouse run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benchmark_index** | **float** | The benchmark index number that indicates rough device class. | [optional] 
**credits** | **Dict[str, str]** | The version of libraries with which these results were generated. Ex: axe-core. | [optional] 
**host_user_agent** | **str** | The user agent string of the version of Chrome used. | [optional] 
**network_user_agent** | **str** | The user agent string that was sent over the network. | [optional] 

## Example

```python
from openapi_client.models.environment import Environment

# TODO update the JSON string below
json = "{}"
# create an instance of Environment from a JSON string
environment_instance = Environment.from_json(json)
# print the JSON string representation of the object
print(Environment.to_json())

# convert the object into a dict
environment_dict = environment_instance.to_dict()
# create an instance of Environment from a dict
environment_from_dict = Environment.from_dict(environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


