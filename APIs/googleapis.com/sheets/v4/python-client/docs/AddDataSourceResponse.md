# AddDataSourceResponse

The result of adding a data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_execution_status** | [**DataExecutionStatus**](DataExecutionStatus.md) |  | [optional] 
**data_source** | [**DataSource**](DataSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_data_source_response import AddDataSourceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddDataSourceResponse from a JSON string
add_data_source_response_instance = AddDataSourceResponse.from_json(json)
# print the JSON string representation of the object
print(AddDataSourceResponse.to_json())

# convert the object into a dict
add_data_source_response_dict = add_data_source_response_instance.to_dict()
# create an instance of AddDataSourceResponse from a dict
add_data_source_response_from_dict = AddDataSourceResponse.from_dict(add_data_source_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


