# BuildUpdateParameters

The set of build properties that can be updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_archive_enabled** | **bool** | The value that indicates whether archiving is enabled or not. | [optional] 

## Example

```python
from openapi_client.models.build_update_parameters import BuildUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of BuildUpdateParameters from a JSON string
build_update_parameters_instance = BuildUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(BuildUpdateParameters.to_json())

# convert the object into a dict
build_update_parameters_dict = build_update_parameters_instance.to_dict()
# create an instance of BuildUpdateParameters from a dict
build_update_parameters_from_dict = BuildUpdateParameters.from_dict(build_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


