# EnvironmentPropertiesFragment

Properties of an environment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**resource_sets** | [**ResourceSetFragment**](ResourceSetFragment.md) |  | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 

## Example

```python
from openapi_client.models.environment_properties_fragment import EnvironmentPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentPropertiesFragment from a JSON string
environment_properties_fragment_instance = EnvironmentPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(EnvironmentPropertiesFragment.to_json())

# convert the object into a dict
environment_properties_fragment_dict = environment_properties_fragment_instance.to_dict()
# create an instance of EnvironmentPropertiesFragment from a dict
environment_properties_fragment_from_dict = EnvironmentPropertiesFragment.from_dict(environment_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


