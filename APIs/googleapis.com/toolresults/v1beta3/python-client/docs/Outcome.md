# Outcome

Interprets a result so that humans and machines can act on it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_detail** | [**FailureDetail**](FailureDetail.md) |  | [optional] 
**inconclusive_detail** | [**InconclusiveDetail**](InconclusiveDetail.md) |  | [optional] 
**skipped_detail** | [**SkippedDetail**](SkippedDetail.md) |  | [optional] 
**success_detail** | [**SuccessDetail**](SuccessDetail.md) |  | [optional] 
**summary** | **str** | The simplest way to interpret a result. Required | [optional] 

## Example

```python
from openapi_client.models.outcome import Outcome

# TODO update the JSON string below
json = "{}"
# create an instance of Outcome from a JSON string
outcome_instance = Outcome.from_json(json)
# print the JSON string representation of the object
print(Outcome.to_json())

# convert the object into a dict
outcome_dict = outcome_instance.to_dict()
# create an instance of Outcome from a dict
outcome_from_dict = Outcome.from_dict(outcome_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


