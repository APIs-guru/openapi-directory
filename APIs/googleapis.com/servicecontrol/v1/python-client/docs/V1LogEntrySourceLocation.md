# V1LogEntrySourceLocation

Additional information about the source code location that produced the log entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **str** | Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. | [optional] 
**function** | **str** | Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: &#x60;qual.if.ied.Class.method&#x60; (Java), &#x60;dir/package.func&#x60; (Go), &#x60;function&#x60; (Python). | [optional] 
**line** | **str** | Optional. Line within the source file. 1-based; 0 indicates no line number available. | [optional] 

## Example

```python
from openapi_client.models.v1_log_entry_source_location import V1LogEntrySourceLocation

# TODO update the JSON string below
json = "{}"
# create an instance of V1LogEntrySourceLocation from a JSON string
v1_log_entry_source_location_instance = V1LogEntrySourceLocation.from_json(json)
# print the JSON string representation of the object
print(V1LogEntrySourceLocation.to_json())

# convert the object into a dict
v1_log_entry_source_location_dict = v1_log_entry_source_location_instance.to_dict()
# create an instance of V1LogEntrySourceLocation from a dict
v1_log_entry_source_location_from_dict = V1LogEntrySourceLocation.from_dict(v1_log_entry_source_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


