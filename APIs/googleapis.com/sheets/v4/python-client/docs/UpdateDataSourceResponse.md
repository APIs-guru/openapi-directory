# UpdateDataSourceResponse

The response from updating data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_execution_status** | [**DataExecutionStatus**](DataExecutionStatus.md) |  | [optional] 
**data_source** | [**DataSource**](DataSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_data_source_response import UpdateDataSourceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDataSourceResponse from a JSON string
update_data_source_response_instance = UpdateDataSourceResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateDataSourceResponse.to_json())

# convert the object into a dict
update_data_source_response_dict = update_data_source_response_instance.to_dict()
# create an instance of UpdateDataSourceResponse from a dict
update_data_source_response_from_dict = UpdateDataSourceResponse.from_dict(update_data_source_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


