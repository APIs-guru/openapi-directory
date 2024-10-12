# SortedDimension

Represents a sorted dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of resource this is, in this case dfareporting#sortedDimension. | [optional] 
**name** | **str** | The name of the dimension. | [optional] 
**sort_order** | **str** | An optional sort order for the dimension column. | [optional] 

## Example

```python
from openapi_client.models.sorted_dimension import SortedDimension

# TODO update the JSON string below
json = "{}"
# create an instance of SortedDimension from a JSON string
sorted_dimension_instance = SortedDimension.from_json(json)
# print the JSON string representation of the object
print(SortedDimension.to_json())

# convert the object into a dict
sorted_dimension_dict = sorted_dimension_instance.to_dict()
# create an instance of SortedDimension from a dict
sorted_dimension_from_dict = SortedDimension.from_dict(sorted_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


