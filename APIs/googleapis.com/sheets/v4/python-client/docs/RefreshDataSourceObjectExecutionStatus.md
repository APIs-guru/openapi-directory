# RefreshDataSourceObjectExecutionStatus

The execution status of refreshing one data source object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_execution_status** | [**DataExecutionStatus**](DataExecutionStatus.md) |  | [optional] 
**reference** | [**DataSourceObjectReference**](DataSourceObjectReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.refresh_data_source_object_execution_status import RefreshDataSourceObjectExecutionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshDataSourceObjectExecutionStatus from a JSON string
refresh_data_source_object_execution_status_instance = RefreshDataSourceObjectExecutionStatus.from_json(json)
# print the JSON string representation of the object
print(RefreshDataSourceObjectExecutionStatus.to_json())

# convert the object into a dict
refresh_data_source_object_execution_status_dict = refresh_data_source_object_execution_status_instance.to_dict()
# create an instance of RefreshDataSourceObjectExecutionStatus from a dict
refresh_data_source_object_execution_status_from_dict = RefreshDataSourceObjectExecutionStatus.from_dict(refresh_data_source_object_execution_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


