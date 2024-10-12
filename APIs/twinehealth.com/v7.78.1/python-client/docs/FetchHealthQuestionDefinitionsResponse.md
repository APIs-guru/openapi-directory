# FetchHealthQuestionDefinitionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[HealthQuestionDefinitionResource]**](HealthQuestionDefinitionResource.md) |  | 
**links** | [**CollectionResponseLinks**](CollectionResponseLinks.md) |  | [optional] 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_health_question_definitions_response import FetchHealthQuestionDefinitionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchHealthQuestionDefinitionsResponse from a JSON string
fetch_health_question_definitions_response_instance = FetchHealthQuestionDefinitionsResponse.from_json(json)
# print the JSON string representation of the object
print(FetchHealthQuestionDefinitionsResponse.to_json())

# convert the object into a dict
fetch_health_question_definitions_response_dict = fetch_health_question_definitions_response_instance.to_dict()
# create an instance of FetchHealthQuestionDefinitionsResponse from a dict
fetch_health_question_definitions_response_from_dict = FetchHealthQuestionDefinitionsResponse.from_dict(fetch_health_question_definitions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


