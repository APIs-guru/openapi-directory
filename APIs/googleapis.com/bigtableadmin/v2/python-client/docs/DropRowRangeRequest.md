# DropRowRangeRequest

Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete_all_data_from_table** | **bool** | Delete all rows in the table. Setting this to false is a no-op. | [optional] 
**row_key_prefix** | **bytearray** | Delete all rows that start with this row key prefix. Prefix cannot be zero length. | [optional] 

## Example

```python
from openapi_client.models.drop_row_range_request import DropRowRangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DropRowRangeRequest from a JSON string
drop_row_range_request_instance = DropRowRangeRequest.from_json(json)
# print the JSON string representation of the object
print(DropRowRangeRequest.to_json())

# convert the object into a dict
drop_row_range_request_dict = drop_row_range_request_instance.to_dict()
# create an instance of DropRowRangeRequest from a dict
drop_row_range_request_from_dict = DropRowRangeRequest.from_dict(drop_row_range_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


