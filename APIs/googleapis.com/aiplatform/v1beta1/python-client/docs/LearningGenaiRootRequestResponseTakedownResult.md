# LearningGenaiRootRequestResponseTakedownResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed** | **bool** | False when response has to be taken down per above config. | [optional] 
**request_takedown_regex** | **str** | Regex used to match the request. | [optional] 
**response_takedown_regex** | **str** | Regex used to decide that response should be taken down. Empty when response is kept. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_request_response_takedown_result import LearningGenaiRootRequestResponseTakedownResult

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootRequestResponseTakedownResult from a JSON string
learning_genai_root_request_response_takedown_result_instance = LearningGenaiRootRequestResponseTakedownResult.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootRequestResponseTakedownResult.to_json())

# convert the object into a dict
learning_genai_root_request_response_takedown_result_dict = learning_genai_root_request_response_takedown_result_instance.to_dict()
# create an instance of LearningGenaiRootRequestResponseTakedownResult from a dict
learning_genai_root_request_response_takedown_result_from_dict = LearningGenaiRootRequestResponseTakedownResult.from_dict(learning_genai_root_request_response_takedown_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


