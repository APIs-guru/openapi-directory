# InsertDimensionRequest

Inserts rows or columns in a sheet at a particular index.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inherit_from_before** | **bool** | Whether dimension properties should be extended from the dimensions before or after the newly inserted dimensions. True to inherit from the dimensions before (in which case the start index must be greater than 0), and false to inherit from the dimensions after. For example, if row index 0 has red background and row index 1 has a green background, then inserting 2 rows at index 1 can inherit either the green or red background. If &#x60;inheritFromBefore&#x60; is true, the two new rows will be red (because the row before the insertion point was red), whereas if &#x60;inheritFromBefore&#x60; is false, the two new rows will be green (because the row after the insertion point was green). | [optional] 
**range** | [**DimensionRange**](DimensionRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.insert_dimension_request import InsertDimensionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InsertDimensionRequest from a JSON string
insert_dimension_request_instance = InsertDimensionRequest.from_json(json)
# print the JSON string representation of the object
print(InsertDimensionRequest.to_json())

# convert the object into a dict
insert_dimension_request_dict = insert_dimension_request_instance.to_dict()
# create an instance of InsertDimensionRequest from a dict
insert_dimension_request_from_dict = InsertDimensionRequest.from_dict(insert_dimension_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


