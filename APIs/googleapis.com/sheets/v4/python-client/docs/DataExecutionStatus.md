# DataExecutionStatus

The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | The error code. | [optional] 
**error_message** | **str** | The error message, which may be empty. | [optional] 
**last_refresh_time** | **str** | Gets the time the data last successfully refreshed. | [optional] 
**state** | **str** | The state of the data execution. | [optional] 

## Example

```python
from openapi_client.models.data_execution_status import DataExecutionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DataExecutionStatus from a JSON string
data_execution_status_instance = DataExecutionStatus.from_json(json)
# print the JSON string representation of the object
print(DataExecutionStatus.to_json())

# convert the object into a dict
data_execution_status_dict = data_execution_status_instance.to_dict()
# create an instance of DataExecutionStatus from a dict
data_execution_status_from_dict = DataExecutionStatus.from_dict(data_execution_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


