# EnvironmentMutableProperties

An object that represents a set of mutable environment resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_retention_time** | **str** | ISO8601 timespan specifying the minimum number of days the environment&#39;s events will be available for query. | [optional] 

## Example

```python
from openapi_client.models.environment_mutable_properties import EnvironmentMutableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentMutableProperties from a JSON string
environment_mutable_properties_instance = EnvironmentMutableProperties.from_json(json)
# print the JSON string representation of the object
print(EnvironmentMutableProperties.to_json())

# convert the object into a dict
environment_mutable_properties_dict = environment_mutable_properties_instance.to_dict()
# create an instance of EnvironmentMutableProperties from a dict
environment_mutable_properties_from_dict = EnvironmentMutableProperties.from_dict(environment_mutable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


