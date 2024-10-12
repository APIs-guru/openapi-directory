# ResponseWithContinuationServiceRunner

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[ServiceRunner]**](ServiceRunner.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_service_runner import ResponseWithContinuationServiceRunner

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationServiceRunner from a JSON string
response_with_continuation_service_runner_instance = ResponseWithContinuationServiceRunner.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationServiceRunner.to_json())

# convert the object into a dict
response_with_continuation_service_runner_dict = response_with_continuation_service_runner_instance.to_dict()
# create an instance of ResponseWithContinuationServiceRunner from a dict
response_with_continuation_service_runner_from_dict = ResponseWithContinuationServiceRunner.from_dict(response_with_continuation_service_runner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


