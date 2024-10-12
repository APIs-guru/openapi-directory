# FetchHealthProfileQuestionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[HealthProfileQuestionResource]**](HealthProfileQuestionResource.md) |  | 
**included** | [**List[Resource]**](Resource.md) | Related resources which are included in the response based on the &#x60;include&#x60; param. Attributes of each resource will vary depending on the type. See [question_definition](#operation/fetchHealthQuestionDefinition), [answer](#operation/fetchHealthProfileAnswer)  | [optional] 
**links** | [**CollectionResponseLinks**](CollectionResponseLinks.md) |  | [optional] 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_health_profile_questions_response import FetchHealthProfileQuestionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchHealthProfileQuestionsResponse from a JSON string
fetch_health_profile_questions_response_instance = FetchHealthProfileQuestionsResponse.from_json(json)
# print the JSON string representation of the object
print(FetchHealthProfileQuestionsResponse.to_json())

# convert the object into a dict
fetch_health_profile_questions_response_dict = fetch_health_profile_questions_response_instance.to_dict()
# create an instance of FetchHealthProfileQuestionsResponse from a dict
fetch_health_profile_questions_response_from_dict = FetchHealthProfileQuestionsResponse.from_dict(fetch_health_profile_questions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


