# EnvironmentSizeFragment

Represents a size category supported by this Lab Account (small, medium or large)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The size category | [optional] 
**vm_sizes** | [**List[SizeInfoFragment]**](SizeInfoFragment.md) | Represents a set of compute sizes that can serve this given size type | [optional] 

## Example

```python
from openapi_client.models.environment_size_fragment import EnvironmentSizeFragment

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentSizeFragment from a JSON string
environment_size_fragment_instance = EnvironmentSizeFragment.from_json(json)
# print the JSON string representation of the object
print(EnvironmentSizeFragment.to_json())

# convert the object into a dict
environment_size_fragment_dict = environment_size_fragment_instance.to_dict()
# create an instance of EnvironmentSizeFragment from a dict
environment_size_fragment_from_dict = EnvironmentSizeFragment.from_dict(environment_size_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


