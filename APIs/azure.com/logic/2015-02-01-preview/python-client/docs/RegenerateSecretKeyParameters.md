# RegenerateSecretKeyParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_type** | [**KeyType**](KeyType.md) |  | [optional] 

## Example

```python
from openapi_client.models.regenerate_secret_key_parameters import RegenerateSecretKeyParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RegenerateSecretKeyParameters from a JSON string
regenerate_secret_key_parameters_instance = RegenerateSecretKeyParameters.from_json(json)
# print the JSON string representation of the object
print(RegenerateSecretKeyParameters.to_json())

# convert the object into a dict
regenerate_secret_key_parameters_dict = regenerate_secret_key_parameters_instance.to_dict()
# create an instance of RegenerateSecretKeyParameters from a dict
regenerate_secret_key_parameters_from_dict = RegenerateSecretKeyParameters.from_dict(regenerate_secret_key_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


