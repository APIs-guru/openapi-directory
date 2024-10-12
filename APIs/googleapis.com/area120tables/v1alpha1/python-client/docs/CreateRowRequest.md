# CreateRowRequest

Request message for TablesService.CreateRow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | Required. The parent table where this row will be created. Format: tables/{table} | [optional] 
**row** | [**Row**](Row.md) |  | [optional] 
**view** | **str** | Optional. Column key to use for values in the row. Defaults to user entered name. | [optional] 

## Example

```python
from openapi_client.models.create_row_request import CreateRowRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRowRequest from a JSON string
create_row_request_instance = CreateRowRequest.from_json(json)
# print the JSON string representation of the object
print(CreateRowRequest.to_json())

# convert the object into a dict
create_row_request_dict = create_row_request_instance.to_dict()
# create an instance of CreateRowRequest from a dict
create_row_request_from_dict = CreateRowRequest.from_dict(create_row_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


