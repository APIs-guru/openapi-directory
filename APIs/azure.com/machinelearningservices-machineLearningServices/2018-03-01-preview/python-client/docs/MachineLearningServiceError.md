# MachineLearningServiceError

Wrapper for error response to follow ARM guidelines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ErrorResponse**](ErrorResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.machine_learning_service_error import MachineLearningServiceError

# TODO update the JSON string below
json = "{}"
# create an instance of MachineLearningServiceError from a JSON string
machine_learning_service_error_instance = MachineLearningServiceError.from_json(json)
# print the JSON string representation of the object
print(MachineLearningServiceError.to_json())

# convert the object into a dict
machine_learning_service_error_dict = machine_learning_service_error_instance.to_dict()
# create an instance of MachineLearningServiceError from a dict
machine_learning_service_error_from_dict = MachineLearningServiceError.from_dict(machine_learning_service_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


