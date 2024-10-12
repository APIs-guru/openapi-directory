# RegenerateKeysParameters

Parameters supplied to the Regenerate Authorization Rule operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_key** | **str** | Key that needs to be regenerated. | [optional] 

## Example

```python
from openapi_client.models.regenerate_keys_parameters import RegenerateKeysParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RegenerateKeysParameters from a JSON string
regenerate_keys_parameters_instance = RegenerateKeysParameters.from_json(json)
# print the JSON string representation of the object
print(RegenerateKeysParameters.to_json())

# convert the object into a dict
regenerate_keys_parameters_dict = regenerate_keys_parameters_instance.to_dict()
# create an instance of RegenerateKeysParameters from a dict
regenerate_keys_parameters_from_dict = RegenerateKeysParameters.from_dict(regenerate_keys_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


