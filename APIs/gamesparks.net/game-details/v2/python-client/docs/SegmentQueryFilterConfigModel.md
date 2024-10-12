# SegmentQueryFilterConfigModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_filters** | [**List[SegmentQueryFilterModel]**](SegmentQueryFilterModel.md) |  | [optional] 
**hidden_filters** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.segment_query_filter_config_model import SegmentQueryFilterConfigModel

# TODO update the JSON string below
json = "{}"
# create an instance of SegmentQueryFilterConfigModel from a JSON string
segment_query_filter_config_model_instance = SegmentQueryFilterConfigModel.from_json(json)
# print the JSON string representation of the object
print(SegmentQueryFilterConfigModel.to_json())

# convert the object into a dict
segment_query_filter_config_model_dict = segment_query_filter_config_model_instance.to_dict()
# create an instance of SegmentQueryFilterConfigModel from a dict
segment_query_filter_config_model_from_dict = SegmentQueryFilterConfigModel.from_dict(segment_query_filter_config_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


