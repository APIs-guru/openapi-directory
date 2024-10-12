# Position

Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | The source code column position (of the line) the current instruction was generated from. | [optional] 
**length** | **str** | The number of bytes of source code making up this stack trace element. | [optional] 
**line** | **str** | The source code line number the current instruction was generated from. | [optional] 

## Example

```python
from openapi_client.models.position import Position

# TODO update the JSON string below
json = "{}"
# create an instance of Position from a JSON string
position_instance = Position.from_json(json)
# print the JSON string representation of the object
print(Position.to_json())

# convert the object into a dict
position_dict = position_instance.to_dict()
# create an instance of Position from a dict
position_from_dict = Position.from_dict(position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


