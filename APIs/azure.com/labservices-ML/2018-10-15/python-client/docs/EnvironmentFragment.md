# EnvironmentFragment

Represents an environment instance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EnvironmentPropertiesFragment**](EnvironmentPropertiesFragment.md) |  | [optional] 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.environment_fragment import EnvironmentFragment

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentFragment from a JSON string
environment_fragment_instance = EnvironmentFragment.from_json(json)
# print the JSON string representation of the object
print(EnvironmentFragment.to_json())

# convert the object into a dict
environment_fragment_dict = environment_fragment_instance.to_dict()
# create an instance of EnvironmentFragment from a dict
environment_fragment_from_dict = EnvironmentFragment.from_dict(environment_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


