# ResponseWithContinuationLab

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[Lab]**](Lab.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_lab import ResponseWithContinuationLab

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationLab from a JSON string
response_with_continuation_lab_instance = ResponseWithContinuationLab.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationLab.to_json())

# convert the object into a dict
response_with_continuation_lab_dict = response_with_continuation_lab_instance.to_dict()
# create an instance of ResponseWithContinuationLab from a dict
response_with_continuation_lab_from_dict = ResponseWithContinuationLab.from_dict(response_with_continuation_lab_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


