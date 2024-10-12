# ContextParams

Additional parameters that can be used to select resource variants. These include any global context parameters, per-resource type client feature capabilities and per-resource type functional attributes. All per-resource type attributes will be `xds.resource.` prefixed and some of these are documented below: `xds.resource.listening_address`: The value is \"IP:port\" (e.g. \"10.1.1.3:8080\") which is the listening address of a Listener. Used in a Listener resource query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**params** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.context_params import ContextParams

# TODO update the JSON string below
json = "{}"
# create an instance of ContextParams from a JSON string
context_params_instance = ContextParams.from_json(json)
# print the JSON string representation of the object
print(ContextParams.to_json())

# convert the object into a dict
context_params_dict = context_params_instance.to_dict()
# create an instance of ContextParams from a dict
context_params_from_dict = ContextParams.from_dict(context_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


