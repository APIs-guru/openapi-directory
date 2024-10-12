# TableDataInsertAllRequest

Request for sending a single streaming insert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_unknown_values** | **bool** | Optional. Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is false, which treats unknown values as errors. | [optional] 
**kind** | **str** | Optional. The resource type of the response. The value is not checked at the backend. Historically, it has been set to \&quot;bigquery#tableDataInsertAllRequest\&quot; but you are not required to set it. | [optional] [default to 'bigquery#tableDataInsertAllRequest']
**rows** | [**List[TableDataInsertAllRequestRowsInner]**](TableDataInsertAllRequestRowsInner.md) |  | [optional] 
**skip_invalid_rows** | **bool** | Optional. Insert all valid rows of a request, even if invalid rows exist. The default value is false, which causes the entire request to fail if any invalid rows exist. | [optional] 
**template_suffix** | **str** | Optional. If specified, treats the destination table as a base template, and inserts the rows into an instance table named \&quot;{destination}{templateSuffix}\&quot;. BigQuery will manage creation of the instance table, using the schema of the base template table. See https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables for considerations when working with templates tables. | [optional] 
**trace_id** | **str** | Optional. Unique request trace id. Used for debugging purposes only. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended. | [optional] 

## Example

```python
from openapi_client.models.table_data_insert_all_request import TableDataInsertAllRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TableDataInsertAllRequest from a JSON string
table_data_insert_all_request_instance = TableDataInsertAllRequest.from_json(json)
# print the JSON string representation of the object
print(TableDataInsertAllRequest.to_json())

# convert the object into a dict
table_data_insert_all_request_dict = table_data_insert_all_request_instance.to_dict()
# create an instance of TableDataInsertAllRequest from a dict
table_data_insert_all_request_from_dict = TableDataInsertAllRequest.from_dict(table_data_insert_all_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


