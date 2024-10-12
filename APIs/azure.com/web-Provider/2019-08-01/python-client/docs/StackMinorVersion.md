# StackMinorVersion

Application stack minor version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_version** | **str** | Application stack minor version (display only). | [optional] 
**is_default** | **bool** | &lt;code&gt;true&lt;/code&gt; if this is the default minor version; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**is_remote_debugging_enabled** | **bool** | &lt;code&gt;true&lt;/code&gt; if this supports Remote Debugging, otherwise &lt;code&gt;false&lt;/code&gt;. | [optional] 
**runtime_version** | **str** | Application stack minor version (runtime only). | [optional] 

## Example

```python
from openapi_client.models.stack_minor_version import StackMinorVersion

# TODO update the JSON string below
json = "{}"
# create an instance of StackMinorVersion from a JSON string
stack_minor_version_instance = StackMinorVersion.from_json(json)
# print the JSON string representation of the object
print(StackMinorVersion.to_json())

# convert the object into a dict
stack_minor_version_dict = stack_minor_version_instance.to_dict()
# create an instance of StackMinorVersion from a dict
stack_minor_version_from_dict = StackMinorVersion.from_dict(stack_minor_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


