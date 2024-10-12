# OperationsStatus

A long running operation status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | The end time of the operation. | [optional] 
**error** | [**ExtendedErrorInfo**](ExtendedErrorInfo.md) |  | [optional] 
**id** | [**OperationsStatusIdentifier**](OperationsStatusIdentifier.md) |  | [optional] 
**percent_complete** | **float** | The completion percentage of the operation. | [optional] 
**properties** | **object** | The internal operation properties. | [optional] 
**response_content** | **object** | The content of the response. | [optional] 
**retry_after** | **str** | The amount of time clients should wait.. | [optional] 
**start_time** | **datetime** | The start time of the operation. | [optional] 
**status** | **str** | The status of the operation. | [optional] 
**terminal_http_status_code** | **str** | The terminal http status code for the operation. | [optional] 

## Example

```python
from openapi_client.models.operations_status import OperationsStatus

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsStatus from a JSON string
operations_status_instance = OperationsStatus.from_json(json)
# print the JSON string representation of the object
print(OperationsStatus.to_json())

# convert the object into a dict
operations_status_dict = operations_status_instance.to_dict()
# create an instance of OperationsStatus from a dict
operations_status_from_dict = OperationsStatus.from_dict(operations_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


