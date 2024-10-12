# Extension

Version and identification for an Envoy extension. [#next-free-field: 6]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Category of the extension. Extension category names use reverse DNS notation. For instance \&quot;envoy.filters.listener\&quot; for Envoy&#39;s built-in listener filters or \&quot;com.acme.filters.http\&quot; for HTTP filters from acme.com vendor. [#comment: | [optional] 
**disabled** | **bool** | Indicates that the extension is present but was disabled via dynamic configuration. | [optional] 
**name** | **str** | This is the name of the Envoy filter as specified in the Envoy configuration, e.g. envoy.filters.http.router, com.acme.widget. | [optional] 
**type_descriptor** | **str** | [#not-implemented-hide:] Type descriptor of extension configuration proto. [#comment: | [optional] 
**version** | [**BuildVersion**](BuildVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.extension import Extension

# TODO update the JSON string below
json = "{}"
# create an instance of Extension from a JSON string
extension_instance = Extension.from_json(json)
# print the JSON string representation of the object
print(Extension.to_json())

# convert the object into a dict
extension_dict = extension_instance.to_dict()
# create an instance of Extension from a dict
extension_from_dict = Extension.from_dict(extension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


