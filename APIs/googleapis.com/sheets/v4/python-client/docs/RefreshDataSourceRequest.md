# RefreshDataSourceRequest

Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope. If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_id** | **str** | Reference to a DataSource. If specified, refreshes all associated data source objects for the data source. | [optional] 
**force** | **bool** | Refreshes the data source objects regardless of the current state. If not set and a referenced data source object was in error state, the refresh will fail immediately. | [optional] 
**is_all** | **bool** | Refreshes all existing data source objects in the spreadsheet. | [optional] 
**references** | [**DataSourceObjectReferences**](DataSourceObjectReferences.md) |  | [optional] 

## Example

```python
from openapi_client.models.refresh_data_source_request import RefreshDataSourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshDataSourceRequest from a JSON string
refresh_data_source_request_instance = RefreshDataSourceRequest.from_json(json)
# print the JSON string representation of the object
print(RefreshDataSourceRequest.to_json())

# convert the object into a dict
refresh_data_source_request_dict = refresh_data_source_request_instance.to_dict()
# create an instance of RefreshDataSourceRequest from a dict
refresh_data_source_request_from_dict = RefreshDataSourceRequest.from_dict(refresh_data_source_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


