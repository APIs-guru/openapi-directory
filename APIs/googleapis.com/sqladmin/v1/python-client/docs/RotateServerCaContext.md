# RotateServerCaContext

Instance rotate server CA context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | This is always &#x60;sql#rotateServerCaContext&#x60;. | [optional] 
**next_version** | **str** | The fingerprint of the next version to be rotated to. If left unspecified, will be rotated to the most recently added server CA version. | [optional] 

## Example

```python
from openapi_client.models.rotate_server_ca_context import RotateServerCaContext

# TODO update the JSON string below
json = "{}"
# create an instance of RotateServerCaContext from a JSON string
rotate_server_ca_context_instance = RotateServerCaContext.from_json(json)
# print the JSON string representation of the object
print(RotateServerCaContext.to_json())

# convert the object into a dict
rotate_server_ca_context_dict = rotate_server_ca_context_instance.to_dict()
# create an instance of RotateServerCaContext from a dict
rotate_server_ca_context_from_dict = RotateServerCaContext.from_dict(rotate_server_ca_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


