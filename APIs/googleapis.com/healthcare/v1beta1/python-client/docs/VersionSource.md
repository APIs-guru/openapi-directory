# VersionSource

Describes a selector for extracting and matching an MSH field to a value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**msh_field** | **str** | The field to extract from the MSH segment. For example, \&quot;3.1\&quot; or \&quot;18[1].1\&quot;. | [optional] 
**value** | **str** | The value to match with the field. For example, \&quot;My Application Name\&quot; or \&quot;2.3\&quot;. | [optional] 

## Example

```python
from openapi_client.models.version_source import VersionSource

# TODO update the JSON string below
json = "{}"
# create an instance of VersionSource from a JSON string
version_source_instance = VersionSource.from_json(json)
# print the JSON string representation of the object
print(VersionSource.to_json())

# convert the object into a dict
version_source_dict = version_source_instance.to_dict()
# create an instance of VersionSource from a dict
version_source_from_dict = VersionSource.from_dict(version_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


