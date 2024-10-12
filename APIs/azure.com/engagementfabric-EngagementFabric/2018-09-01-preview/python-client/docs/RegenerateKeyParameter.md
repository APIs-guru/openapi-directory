# RegenerateKeyParameter

The parameter to regenerate single EngagementFabric account key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of key to be regenerated | 
**rank** | [**KeyRank**](KeyRank.md) |  | 

## Example

```python
from openapi_client.models.regenerate_key_parameter import RegenerateKeyParameter

# TODO update the JSON string below
json = "{}"
# create an instance of RegenerateKeyParameter from a JSON string
regenerate_key_parameter_instance = RegenerateKeyParameter.from_json(json)
# print the JSON string representation of the object
print(RegenerateKeyParameter.to_json())

# convert the object into a dict
regenerate_key_parameter_dict = regenerate_key_parameter_instance.to_dict()
# create an instance of RegenerateKeyParameter from a dict
regenerate_key_parameter_from_dict = RegenerateKeyParameter.from_dict(regenerate_key_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


