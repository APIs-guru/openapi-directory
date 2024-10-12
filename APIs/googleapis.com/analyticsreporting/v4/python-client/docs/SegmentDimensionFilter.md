# SegmentDimensionFilter

Dimension filter specifies the filtering options on a dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **bool** | Should the match be case sensitive, ignored for &#x60;IN_LIST&#x60; operator. | [optional] 
**dimension_name** | **str** | Name of the dimension for which the filter is being applied. | [optional] 
**expressions** | **List[str]** | The list of expressions, only the first element is used for all operators | [optional] 
**max_comparison_value** | **str** | Maximum comparison values for &#x60;BETWEEN&#x60; match type. | [optional] 
**min_comparison_value** | **str** | Minimum comparison values for &#x60;BETWEEN&#x60; match type. | [optional] 
**operator** | **str** | The operator to use to match the dimension with the expressions. | [optional] 

## Example

```python
from openapi_client.models.segment_dimension_filter import SegmentDimensionFilter

# TODO update the JSON string below
json = "{}"
# create an instance of SegmentDimensionFilter from a JSON string
segment_dimension_filter_instance = SegmentDimensionFilter.from_json(json)
# print the JSON string representation of the object
print(SegmentDimensionFilter.to_json())

# convert the object into a dict
segment_dimension_filter_dict = segment_dimension_filter_instance.to_dict()
# create an instance of SegmentDimensionFilter from a dict
segment_dimension_filter_from_dict = SegmentDimensionFilter.from_dict(segment_dimension_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


