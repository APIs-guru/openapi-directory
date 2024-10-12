# FetchHealthProfileAnswerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**HealthProfileAnswerResource**](HealthProfileAnswerResource.md) |  | 
**included** | [**List[Resource]**](Resource.md) | Related resources which are included in the response based on the &#x60;include&#x60; param. Attributes of each resource will vary depending on the type. See [patient](#operation/fetchPatient)  | [optional] 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_health_profile_answer_response import FetchHealthProfileAnswerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchHealthProfileAnswerResponse from a JSON string
fetch_health_profile_answer_response_instance = FetchHealthProfileAnswerResponse.from_json(json)
# print the JSON string representation of the object
print(FetchHealthProfileAnswerResponse.to_json())

# convert the object into a dict
fetch_health_profile_answer_response_dict = fetch_health_profile_answer_response_instance.to_dict()
# create an instance of FetchHealthProfileAnswerResponse from a dict
fetch_health_profile_answer_response_from_dict = FetchHealthProfileAnswerResponse.from_dict(fetch_health_profile_answer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


