# KeyUpdateParameters

The key update parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**KeyAttributes**](KeyAttributes.md) |  | [optional] 
**key_ops** | **List[str]** | Json web key operations. For more information on possible key operations, see JsonWebKeyOperation. | [optional] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.key_update_parameters import KeyUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of KeyUpdateParameters from a JSON string
key_update_parameters_instance = KeyUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(KeyUpdateParameters.to_json())

# convert the object into a dict
key_update_parameters_dict = key_update_parameters_instance.to_dict()
# create an instance of KeyUpdateParameters from a dict
key_update_parameters_from_dict = KeyUpdateParameters.from_dict(key_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


