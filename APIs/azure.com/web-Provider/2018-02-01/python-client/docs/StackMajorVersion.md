# StackMajorVersion

Application stack major version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_insights** | **bool** | &lt;code&gt;true&lt;/code&gt; if this supports Application Insights; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**display_version** | **str** | Application stack major version (display only). | [optional] 
**is_default** | **bool** | &lt;code&gt;true&lt;/code&gt; if this is the default major version; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**minor_versions** | [**List[StackMinorVersion]**](StackMinorVersion.md) | Minor versions associated with the major version. | [optional] 
**runtime_version** | **str** | Application stack major version (runtime only). | [optional] 

## Example

```python
from openapi_client.models.stack_major_version import StackMajorVersion

# TODO update the JSON string below
json = "{}"
# create an instance of StackMajorVersion from a JSON string
stack_major_version_instance = StackMajorVersion.from_json(json)
# print the JSON string representation of the object
print(StackMajorVersion.to_json())

# convert the object into a dict
stack_major_version_dict = stack_major_version_instance.to_dict()
# create an instance of StackMajorVersion from a dict
stack_major_version_from_dict = StackMajorVersion.from_dict(stack_major_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


