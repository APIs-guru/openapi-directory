# BootstrapConfiguration

Configuration used to bootstrap a Pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repository** | [**CodeRepository**](CodeRepository.md) |  | [optional] 
**template** | [**PipelineTemplate**](PipelineTemplate.md) |  | 

## Example

```python
from openapi_client.models.bootstrap_configuration import BootstrapConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of BootstrapConfiguration from a JSON string
bootstrap_configuration_instance = BootstrapConfiguration.from_json(json)
# print the JSON string representation of the object
print(BootstrapConfiguration.to_json())

# convert the object into a dict
bootstrap_configuration_dict = bootstrap_configuration_instance.to_dict()
# create an instance of BootstrapConfiguration from a dict
bootstrap_configuration_from_dict = BootstrapConfiguration.from_dict(bootstrap_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


