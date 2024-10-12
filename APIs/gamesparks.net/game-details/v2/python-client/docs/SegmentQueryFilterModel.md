# SegmentQueryFilterModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**options** | **List[object]** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.segment_query_filter_model import SegmentQueryFilterModel

# TODO update the JSON string below
json = "{}"
# create an instance of SegmentQueryFilterModel from a JSON string
segment_query_filter_model_instance = SegmentQueryFilterModel.from_json(json)
# print the JSON string representation of the object
print(SegmentQueryFilterModel.to_json())

# convert the object into a dict
segment_query_filter_model_dict = segment_query_filter_model_instance.to_dict()
# create an instance of SegmentQueryFilterModel from a dict
segment_query_filter_model_from_dict = SegmentQueryFilterModel.from_dict(segment_query_filter_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


