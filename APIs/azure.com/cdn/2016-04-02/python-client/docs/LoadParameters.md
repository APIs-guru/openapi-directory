# LoadParameters

Parameters required for endpoint load.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_paths** | **List[str]** | The path to the content to be loaded. Should describe a file path. | 

## Example

```python
from openapi_client.models.load_parameters import LoadParameters

# TODO update the JSON string below
json = "{}"
# create an instance of LoadParameters from a JSON string
load_parameters_instance = LoadParameters.from_json(json)
# print the JSON string representation of the object
print(LoadParameters.to_json())

# convert the object into a dict
load_parameters_dict = load_parameters_instance.to_dict()
# create an instance of LoadParameters from a dict
load_parameters_from_dict = LoadParameters.from_dict(load_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


