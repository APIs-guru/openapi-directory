# DeleteDuplicatesRequest

Removes rows within this range that contain values in the specified columns that are duplicates of values in any previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be duplicates. This request also removes duplicate rows hidden from view (for example, due to a filter). When removing duplicates, the first instance of each duplicate row scanning from the top downwards is kept in the resulting range. Content outside of the specified range isn't removed, and rows considered duplicates do not have to be adjacent to each other in the range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_columns** | [**List[DimensionRange]**](DimensionRange.md) | The columns in the range to analyze for duplicate values. If no columns are selected then all columns are analyzed for duplicates. | [optional] 
**range** | [**GridRange**](GridRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.delete_duplicates_request import DeleteDuplicatesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteDuplicatesRequest from a JSON string
delete_duplicates_request_instance = DeleteDuplicatesRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteDuplicatesRequest.to_json())

# convert the object into a dict
delete_duplicates_request_dict = delete_duplicates_request_instance.to_dict()
# create an instance of DeleteDuplicatesRequest from a dict
delete_duplicates_request_from_dict = DeleteDuplicatesRequest.from_dict(delete_duplicates_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


