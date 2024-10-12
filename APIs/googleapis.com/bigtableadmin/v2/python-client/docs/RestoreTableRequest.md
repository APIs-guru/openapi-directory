# RestoreTableRequest

The request for RestoreTable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup** | **str** | Name of the backup from which to restore. Values are of the form &#x60;projects//instances//clusters//backups/&#x60;. | [optional] 
**table_id** | **str** | Required. The id of the table to create and restore to. This table must not already exist. The &#x60;table_id&#x60; appended to &#x60;parent&#x60; forms the full table name of the form &#x60;projects//instances//tables/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.restore_table_request import RestoreTableRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreTableRequest from a JSON string
restore_table_request_instance = RestoreTableRequest.from_json(json)
# print the JSON string representation of the object
print(RestoreTableRequest.to_json())

# convert the object into a dict
restore_table_request_dict = restore_table_request_instance.to_dict()
# create an instance of RestoreTableRequest from a dict
restore_table_request_from_dict = RestoreTableRequest.from_dict(restore_table_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


