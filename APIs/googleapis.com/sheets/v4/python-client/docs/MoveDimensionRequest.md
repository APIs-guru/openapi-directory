# MoveDimensionRequest

Moves one or more rows or columns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_index** | **int** | The zero-based start index of where to move the source data to, based on the coordinates *before* the source data is removed from the grid. Existing data will be shifted down or right (depending on the dimension) to make room for the moved dimensions. The source dimensions are removed from the grid, so the the data may end up in a different index than specified. For example, given &#x60;A1..A5&#x60; of &#x60;0, 1, 2, 3, 4&#x60; and wanting to move &#x60;\&quot;1\&quot;&#x60; and &#x60;\&quot;2\&quot;&#x60; to between &#x60;\&quot;3\&quot;&#x60; and &#x60;\&quot;4\&quot;&#x60;, the source would be &#x60;ROWS [1..3)&#x60;,and the destination index would be &#x60;\&quot;4\&quot;&#x60; (the zero-based index of row 5). The end result would be &#x60;A1..A5&#x60; of &#x60;0, 3, 1, 2, 4&#x60;. | [optional] 
**source** | [**DimensionRange**](DimensionRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.move_dimension_request import MoveDimensionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveDimensionRequest from a JSON string
move_dimension_request_instance = MoveDimensionRequest.from_json(json)
# print the JSON string representation of the object
print(MoveDimensionRequest.to_json())

# convert the object into a dict
move_dimension_request_dict = move_dimension_request_instance.to_dict()
# create an instance of MoveDimensionRequest from a dict
move_dimension_request_from_dict = MoveDimensionRequest.from_dict(move_dimension_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


