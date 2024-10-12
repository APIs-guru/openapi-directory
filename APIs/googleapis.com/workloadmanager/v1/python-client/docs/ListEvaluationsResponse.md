# ListEvaluationsResponse

Message for response to listing Evaluations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluations** | [**List[Evaluation]**](Evaluation.md) | The list of Evaluation | [optional] 
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_evaluations_response import ListEvaluationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEvaluationsResponse from a JSON string
list_evaluations_response_instance = ListEvaluationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListEvaluationsResponse.to_json())

# convert the object into a dict
list_evaluations_response_dict = list_evaluations_response_instance.to_dict()
# create an instance of ListEvaluationsResponse from a dict
list_evaluations_response_from_dict = ListEvaluationsResponse.from_dict(list_evaluations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


