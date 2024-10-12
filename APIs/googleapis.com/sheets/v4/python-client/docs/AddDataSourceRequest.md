# AddDataSourceRequest

Adds a data source. After the data source is added successfully, an associated DATA_SOURCE sheet is created and an execution is triggered to refresh the sheet to read data from the data source. The request requires an additional `bigquery.readonly` OAuth scope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | [**DataSource**](DataSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_data_source_request import AddDataSourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddDataSourceRequest from a JSON string
add_data_source_request_instance = AddDataSourceRequest.from_json(json)
# print the JSON string representation of the object
print(AddDataSourceRequest.to_json())

# convert the object into a dict
add_data_source_request_dict = add_data_source_request_instance.to_dict()
# create an instance of AddDataSourceRequest from a dict
add_data_source_request_from_dict = AddDataSourceRequest.from_dict(add_data_source_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


