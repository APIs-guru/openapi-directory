# ConcatPosition

A position that encapsulates an inner position and an index for the inner position. A ConcatPosition can be used by a reader of a source that encapsulates a set of other sources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** | Index of the inner source. | [optional] 
**position** | [**Position**](Position.md) |  | [optional] 

## Example

```python
from openapi_client.models.concat_position import ConcatPosition

# TODO update the JSON string below
json = "{}"
# create an instance of ConcatPosition from a JSON string
concat_position_instance = ConcatPosition.from_json(json)
# print the JSON string representation of the object
print(ConcatPosition.to_json())

# convert the object into a dict
concat_position_dict = concat_position_instance.to_dict()
# create an instance of ConcatPosition from a dict
concat_position_from_dict = ConcatPosition.from_dict(concat_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


