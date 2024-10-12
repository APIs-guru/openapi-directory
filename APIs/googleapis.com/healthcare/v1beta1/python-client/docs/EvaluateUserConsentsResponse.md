# EvaluateUserConsentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. This token is valid for 72 hours after it is created. | [optional] 
**results** | [**List[Result]**](Result.md) | The consent evaluation result for each &#x60;data_id&#x60;. | [optional] 

## Example

```python
from openapi_client.models.evaluate_user_consents_response import EvaluateUserConsentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EvaluateUserConsentsResponse from a JSON string
evaluate_user_consents_response_instance = EvaluateUserConsentsResponse.from_json(json)
# print the JSON string representation of the object
print(EvaluateUserConsentsResponse.to_json())

# convert the object into a dict
evaluate_user_consents_response_dict = evaluate_user_consents_response_instance.to_dict()
# create an instance of EvaluateUserConsentsResponse from a dict
evaluate_user_consents_response_from_dict = EvaluateUserConsentsResponse.from_dict(evaluate_user_consents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


