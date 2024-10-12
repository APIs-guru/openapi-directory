# RegenerateKeyParameters

The parameters used to regenerate an API key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the key to regenerate. | [optional] 

## Example

```python
from openapi_client.models.regenerate_key_parameters import RegenerateKeyParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RegenerateKeyParameters from a JSON string
regenerate_key_parameters_instance = RegenerateKeyParameters.from_json(json)
# print the JSON string representation of the object
print(RegenerateKeyParameters.to_json())

# convert the object into a dict
regenerate_key_parameters_dict = regenerate_key_parameters_instance.to_dict()
# create an instance of RegenerateKeyParameters from a dict
regenerate_key_parameters_from_dict = RegenerateKeyParameters.from_dict(regenerate_key_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


