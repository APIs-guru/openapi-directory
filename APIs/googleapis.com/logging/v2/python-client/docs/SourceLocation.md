# SourceLocation

Specifies a location in a source code file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **str** | Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. | [optional] 
**function_name** | **str** | Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information is used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python). | [optional] 
**line** | **str** | Line within the source file. | [optional] 

## Example

```python
from openapi_client.models.source_location import SourceLocation

# TODO update the JSON string below
json = "{}"
# create an instance of SourceLocation from a JSON string
source_location_instance = SourceLocation.from_json(json)
# print the JSON string representation of the object
print(SourceLocation.to_json())

# convert the object into a dict
source_location_dict = source_location_instance.to_dict()
# create an instance of SourceLocation from a dict
source_location_from_dict = SourceLocation.from_dict(source_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


