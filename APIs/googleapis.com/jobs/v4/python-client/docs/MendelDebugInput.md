# MendelDebugInput

Message representing input to a Mendel server for debug forcing. See go/mendel-debug-forcing for more details. Next ID: 2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespaced_debug_input** | [**Dict[str, NamespacedDebugInput]**](NamespacedDebugInput.md) | When a request spans multiple servers, a MendelDebugInput may travel with the request and take effect in all the servers. This field is a map of namespaces to NamespacedMendelDebugInput protos. In a single server, up to two NamespacedMendelDebugInput protos are applied: 1. NamespacedMendelDebugInput with the global namespace (key &#x3D;&#x3D; \&quot;\&quot;). 2. NamespacedMendelDebugInput with the server&#39;s namespace. When both NamespacedMendelDebugInput protos are present, they are merged. See go/mendel-debug-forcing for more details. | [optional] 

## Example

```python
from openapi_client.models.mendel_debug_input import MendelDebugInput

# TODO update the JSON string below
json = "{}"
# create an instance of MendelDebugInput from a JSON string
mendel_debug_input_instance = MendelDebugInput.from_json(json)
# print the JSON string representation of the object
print(MendelDebugInput.to_json())

# convert the object into a dict
mendel_debug_input_dict = mendel_debug_input_instance.to_dict()
# create an instance of MendelDebugInput from a dict
mendel_debug_input_from_dict = MendelDebugInput.from_dict(mendel_debug_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


