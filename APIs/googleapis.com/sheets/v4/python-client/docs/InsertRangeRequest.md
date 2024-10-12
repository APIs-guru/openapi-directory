# InsertRangeRequest

Inserts cells into a range, shifting the existing cells over or down.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**GridRange**](GridRange.md) |  | [optional] 
**shift_dimension** | **str** | The dimension which will be shifted when inserting cells. If ROWS, existing cells will be shifted down. If COLUMNS, existing cells will be shifted right. | [optional] 

## Example

```python
from openapi_client.models.insert_range_request import InsertRangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InsertRangeRequest from a JSON string
insert_range_request_instance = InsertRangeRequest.from_json(json)
# print the JSON string representation of the object
print(InsertRangeRequest.to_json())

# convert the object into a dict
insert_range_request_dict = insert_range_request_instance.to_dict()
# create an instance of InsertRangeRequest from a dict
insert_range_request_from_dict = InsertRangeRequest.from_dict(insert_range_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


