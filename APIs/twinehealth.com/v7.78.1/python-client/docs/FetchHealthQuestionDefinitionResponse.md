# FetchHealthQuestionDefinitionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**HealthQuestionDefinitionResource**](HealthQuestionDefinitionResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_health_question_definition_response import FetchHealthQuestionDefinitionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchHealthQuestionDefinitionResponse from a JSON string
fetch_health_question_definition_response_instance = FetchHealthQuestionDefinitionResponse.from_json(json)
# print the JSON string representation of the object
print(FetchHealthQuestionDefinitionResponse.to_json())

# convert the object into a dict
fetch_health_question_definition_response_dict = fetch_health_question_definition_response_instance.to_dict()
# create an instance of FetchHealthQuestionDefinitionResponse from a dict
fetch_health_question_definition_response_from_dict = FetchHealthQuestionDefinitionResponse.from_dict(fetch_health_question_definition_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


