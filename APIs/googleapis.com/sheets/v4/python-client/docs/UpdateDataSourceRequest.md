# UpdateDataSourceRequest

Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional `bigquery.readonly` OAuth scope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | [**DataSource**](DataSource.md) |  | [optional] 
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;dataSource&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 

## Example

```python
from openapi_client.models.update_data_source_request import UpdateDataSourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDataSourceRequest from a JSON string
update_data_source_request_instance = UpdateDataSourceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDataSourceRequest.to_json())

# convert the object into a dict
update_data_source_request_dict = update_data_source_request_instance.to_dict()
# create an instance of UpdateDataSourceRequest from a dict
update_data_source_request_from_dict = UpdateDataSourceRequest.from_dict(update_data_source_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


