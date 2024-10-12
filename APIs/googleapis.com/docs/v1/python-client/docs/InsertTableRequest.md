# InsertTableRequest

Inserts a table at the specified location. A newline character will be inserted before the inserted table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **int** | The number of columns in the table. | [optional] 
**end_of_segment_location** | [**EndOfSegmentLocation**](EndOfSegmentLocation.md) |  | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**rows** | **int** | The number of rows in the table. | [optional] 

## Example

```python
from openapi_client.models.insert_table_request import InsertTableRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InsertTableRequest from a JSON string
insert_table_request_instance = InsertTableRequest.from_json(json)
# print the JSON string representation of the object
print(InsertTableRequest.to_json())

# convert the object into a dict
insert_table_request_dict = insert_table_request_instance.to_dict()
# create an instance of InsertTableRequest from a dict
insert_table_request_from_dict = InsertTableRequest.from_dict(insert_table_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


