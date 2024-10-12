# JitRequestPatchable

Information about JIT request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Jit request tags | [optional] 

## Example

```python
from openapi_client.models.jit_request_patchable import JitRequestPatchable

# TODO update the JSON string below
json = "{}"
# create an instance of JitRequestPatchable from a JSON string
jit_request_patchable_instance = JitRequestPatchable.from_json(json)
# print the JSON string representation of the object
print(JitRequestPatchable.to_json())

# convert the object into a dict
jit_request_patchable_dict = jit_request_patchable_instance.to_dict()
# create an instance of JitRequestPatchable from a dict
jit_request_patchable_from_dict = JitRequestPatchable.from_dict(jit_request_patchable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


