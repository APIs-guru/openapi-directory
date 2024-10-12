# BatchUpdateRowsResponse

Response message for TablesService.BatchUpdateRows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rows** | [**List[Row]**](Row.md) | The updated rows. | [optional] 

## Example

```python
from openapi_client.models.batch_update_rows_response import BatchUpdateRowsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateRowsResponse from a JSON string
batch_update_rows_response_instance = BatchUpdateRowsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateRowsResponse.to_json())

# convert the object into a dict
batch_update_rows_response_dict = batch_update_rows_response_instance.to_dict()
# create an instance of BatchUpdateRowsResponse from a dict
batch_update_rows_response_from_dict = BatchUpdateRowsResponse.from_dict(batch_update_rows_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


