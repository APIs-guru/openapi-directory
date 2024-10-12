# RuntimeConfig

Runtime configuration for a workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_image** | **str** | Optional. Optional custom container image for the job runtime environment. If not specified, a default container image will be used. | [optional] 
**properties** | **Dict[str, str]** | Optional. A mapping of property names to values, which are used to configure workload execution. | [optional] 
**repository_config** | [**RepositoryConfig**](RepositoryConfig.md) |  | [optional] 
**version** | **str** | Optional. Version of the batch runtime. | [optional] 

## Example

```python
from openapi_client.models.runtime_config import RuntimeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeConfig from a JSON string
runtime_config_instance = RuntimeConfig.from_json(json)
# print the JSON string representation of the object
print(RuntimeConfig.to_json())

# convert the object into a dict
runtime_config_dict = runtime_config_instance.to_dict()
# create an instance of RuntimeConfig from a dict
runtime_config_from_dict = RuntimeConfig.from_dict(runtime_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


