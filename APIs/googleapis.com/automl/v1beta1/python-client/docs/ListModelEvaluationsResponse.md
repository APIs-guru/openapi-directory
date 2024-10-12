# ListModelEvaluationsResponse

Response message for AutoMl.ListModelEvaluations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_evaluation** | [**List[ModelEvaluation]**](ModelEvaluation.md) | List of model evaluations in the requested page. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass to the ListModelEvaluationsRequest.page_token field of a new AutoMl.ListModelEvaluations request to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.list_model_evaluations_response import ListModelEvaluationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListModelEvaluationsResponse from a JSON string
list_model_evaluations_response_instance = ListModelEvaluationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListModelEvaluationsResponse.to_json())

# convert the object into a dict
list_model_evaluations_response_dict = list_model_evaluations_response_instance.to_dict()
# create an instance of ListModelEvaluationsResponse from a dict
list_model_evaluations_response_from_dict = ListModelEvaluationsResponse.from_dict(list_model_evaluations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


