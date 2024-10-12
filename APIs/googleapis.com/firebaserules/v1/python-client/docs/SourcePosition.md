# SourcePosition

Position in the `Source` content including its line, column number, and an index of the `File` in the `Source` message. Used for debug purposes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **int** | First column on the source line associated with the source fragment. | [optional] 
**current_offset** | **int** | Start position relative to the beginning of the file. | [optional] 
**end_offset** | **int** | End position relative to the beginning of the file. | [optional] 
**file_name** | **str** | Name of the &#x60;File&#x60;. | [optional] 
**line** | **int** | Line number of the source fragment. 1-based. | [optional] 

## Example

```python
from openapi_client.models.source_position import SourcePosition

# TODO update the JSON string below
json = "{}"
# create an instance of SourcePosition from a JSON string
source_position_instance = SourcePosition.from_json(json)
# print the JSON string representation of the object
print(SourcePosition.to_json())

# convert the object into a dict
source_position_dict = source_position_instance.to_dict()
# create an instance of SourcePosition from a dict
source_position_from_dict = SourcePosition.from_dict(source_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


