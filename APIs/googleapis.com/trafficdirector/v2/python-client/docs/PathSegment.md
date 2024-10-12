# PathSegment

Specifies the segment in a path to retrieve value from Struct.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | If specified, use the key to retrieve the value in a Struct. | [optional] 

## Example

```python
from openapi_client.models.path_segment import PathSegment

# TODO update the JSON string below
json = "{}"
# create an instance of PathSegment from a JSON string
path_segment_instance = PathSegment.from_json(json)
# print the JSON string representation of the object
print(PathSegment.to_json())

# convert the object into a dict
path_segment_dict = path_segment_instance.to_dict()
# create an instance of PathSegment from a dict
path_segment_from_dict = PathSegment.from_dict(path_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


