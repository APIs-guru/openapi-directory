# SourceLocation

Indicates a location in the source code of the service for which errors are reported. `functionName` must be provided by the application when reporting an error, unless the error report contains a `message` with a supported exception stack trace. All fields are optional for the later case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_path** | **str** | The source code filename, which can include a truncated relative path, or a full path from a production machine. | [optional] 
**function_name** | **str** | Human-readable name of a function or method. The value can include optional context like the class or package name. For example, &#x60;my.package.MyClass.method&#x60; in case of Java. | [optional] 
**line_number** | **int** | 1-based. 0 indicates that the line number is unknown. | [optional] 

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


