# SourceLocation

Represents a location in the source code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **int** | Column within a line. The first column in a line as the value &#x60;1&#x60;. Agents that do not support setting breakpoints on specific columns ignore this field. | [optional] 
**line** | **int** | Line inside the file. The first line in the file has the value &#x60;1&#x60;. | [optional] 
**path** | **str** | Path to the source file within the source context of the target binary. | [optional] 

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


