# FactoryProperties

Factory resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **datetime** | Time the factory was created in ISO8601 format. | [optional] [readonly] 
**provisioning_state** | **str** | Factory provisioning state, example Succeeded. | [optional] [readonly] 
**repo_configuration** | [**FactoryRepoConfiguration**](FactoryRepoConfiguration.md) |  | [optional] 
**version** | **str** | Version of the factory. | [optional] [readonly] 

## Example

```python
from openapi_client.models.factory_properties import FactoryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FactoryProperties from a JSON string
factory_properties_instance = FactoryProperties.from_json(json)
# print the JSON string representation of the object
print(FactoryProperties.to_json())

# convert the object into a dict
factory_properties_dict = factory_properties_instance.to_dict()
# create an instance of FactoryProperties from a dict
factory_properties_from_dict = FactoryProperties.from_dict(factory_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


