# RegenerateKeyParameters

Parameters describes the request to regenerate access keys

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_type** | **str** | The keyType to regenerate. Must be either &#39;primary&#39; or &#39;secondary&#39;(case-insensitive). | [optional] 

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


