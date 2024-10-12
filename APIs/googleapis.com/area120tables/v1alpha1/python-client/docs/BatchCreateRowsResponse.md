# BatchCreateRowsResponse

Response message for TablesService.BatchCreateRows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rows** | [**List[Row]**](Row.md) | The created rows. | [optional] 

## Example

```python
from openapi_client.models.batch_create_rows_response import BatchCreateRowsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateRowsResponse from a JSON string
batch_create_rows_response_instance = BatchCreateRowsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreateRowsResponse.to_json())

# convert the object into a dict
batch_create_rows_response_dict = batch_create_rows_response_instance.to_dict()
# create an instance of BatchCreateRowsResponse from a dict
batch_create_rows_response_from_dict = BatchCreateRowsResponse.from_dict(batch_create_rows_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


