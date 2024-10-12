# Segment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**description** | **str** |  | 
**filter** | **Dict[str, object]** |  | 
**id** | **str** |  | 
**in_use** | **bool** |  | 
**name** | **str** |  | 
**size** | **int** |  | 
**status** | **str** |  | 
**type** | **str** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.segment import Segment

# TODO update the JSON string below
json = "{}"
# create an instance of Segment from a JSON string
segment_instance = Segment.from_json(json)
# print the JSON string representation of the object
print(Segment.to_json())

# convert the object into a dict
segment_dict = segment_instance.to_dict()
# create an instance of Segment from a dict
segment_from_dict = Segment.from_dict(segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


