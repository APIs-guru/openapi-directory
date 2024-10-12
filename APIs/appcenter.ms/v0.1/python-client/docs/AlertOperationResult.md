# AlertOperationResult

Generic result for any alerting API operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Unique request identifier for tracking | 

## Example

```python
from openapi_client.models.alert_operation_result import AlertOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of AlertOperationResult from a JSON string
alert_operation_result_instance = AlertOperationResult.from_json(json)
# print the JSON string representation of the object
print(AlertOperationResult.to_json())

# convert the object into a dict
alert_operation_result_dict = alert_operation_result_instance.to_dict()
# create an instance of AlertOperationResult from a dict
alert_operation_result_from_dict = AlertOperationResult.from_dict(alert_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


