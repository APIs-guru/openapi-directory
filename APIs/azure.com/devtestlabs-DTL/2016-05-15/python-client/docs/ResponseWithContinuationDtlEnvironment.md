# ResponseWithContinuationDtlEnvironment

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[DtlEnvironment]**](DtlEnvironment.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_dtl_environment import ResponseWithContinuationDtlEnvironment

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationDtlEnvironment from a JSON string
response_with_continuation_dtl_environment_instance = ResponseWithContinuationDtlEnvironment.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationDtlEnvironment.to_json())

# convert the object into a dict
response_with_continuation_dtl_environment_dict = response_with_continuation_dtl_environment_instance.to_dict()
# create an instance of ResponseWithContinuationDtlEnvironment from a dict
response_with_continuation_dtl_environment_from_dict = ResponseWithContinuationDtlEnvironment.from_dict(response_with_continuation_dtl_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


