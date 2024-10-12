# SegmentQueryFilterListModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**List[SegmentQueryFilterModel]**](SegmentQueryFilterModel.md) |  | [optional] 

## Example

```python
from openapi_client.models.segment_query_filter_list_model import SegmentQueryFilterListModel

# TODO update the JSON string below
json = "{}"
# create an instance of SegmentQueryFilterListModel from a JSON string
segment_query_filter_list_model_instance = SegmentQueryFilterListModel.from_json(json)
# print the JSON string representation of the object
print(SegmentQueryFilterListModel.to_json())

# convert the object into a dict
segment_query_filter_list_model_dict = segment_query_filter_list_model_instance.to_dict()
# create an instance of SegmentQueryFilterListModel from a dict
segment_query_filter_list_model_from_dict = SegmentQueryFilterListModel.from_dict(segment_query_filter_list_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


