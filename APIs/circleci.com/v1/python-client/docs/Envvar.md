# Envvar


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.envvar import Envvar

# TODO update the JSON string below
json = "{}"
# create an instance of Envvar from a JSON string
envvar_instance = Envvar.from_json(json)
# print the JSON string representation of the object
print(Envvar.to_json())

# convert the object into a dict
envvar_dict = envvar_instance.to_dict()
# create an instance of Envvar from a dict
envvar_from_dict = Envvar.from_dict(envvar_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


