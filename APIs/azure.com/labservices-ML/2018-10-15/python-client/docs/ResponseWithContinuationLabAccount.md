# ResponseWithContinuationLabAccount

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[LabAccount]**](LabAccount.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_lab_account import ResponseWithContinuationLabAccount

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationLabAccount from a JSON string
response_with_continuation_lab_account_instance = ResponseWithContinuationLabAccount.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationLabAccount.to_json())

# convert the object into a dict
response_with_continuation_lab_account_dict = response_with_continuation_lab_account_instance.to_dict()
# create an instance of ResponseWithContinuationLabAccount from a dict
response_with_continuation_lab_account_from_dict = ResponseWithContinuationLabAccount.from_dict(response_with_continuation_lab_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


