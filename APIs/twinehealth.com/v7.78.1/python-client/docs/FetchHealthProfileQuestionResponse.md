# FetchHealthProfileQuestionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**HealthProfileQuestionResource**](HealthProfileQuestionResource.md) |  | 
**included** | [**List[Resource]**](Resource.md) | Related resources which are included in the response based on the &#x60;include&#x60; param. Attributes of each resource will vary depending on the type. See [question_definition](#operation/fetchHealthQuestionDefinition), [answer](#operation/fetchHealthProfileAnswer)  | [optional] 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_health_profile_question_response import FetchHealthProfileQuestionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchHealthProfileQuestionResponse from a JSON string
fetch_health_profile_question_response_instance = FetchHealthProfileQuestionResponse.from_json(json)
# print the JSON string representation of the object
print(FetchHealthProfileQuestionResponse.to_json())

# convert the object into a dict
fetch_health_profile_question_response_dict = fetch_health_profile_question_response_instance.to_dict()
# create an instance of FetchHealthProfileQuestionResponse from a dict
fetch_health_profile_question_response_from_dict = FetchHealthProfileQuestionResponse.from_dict(fetch_health_profile_question_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


