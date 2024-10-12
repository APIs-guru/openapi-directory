# ListConsentArtifactsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_artifacts** | [**List[ConsentArtifact]**](ConsentArtifact.md) | The returned Consent artifacts. The maximum number of artifacts returned is determined by the value of page_size in the ListConsentArtifactsRequest. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_consent_artifacts_response import ListConsentArtifactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConsentArtifactsResponse from a JSON string
list_consent_artifacts_response_instance = ListConsentArtifactsResponse.from_json(json)
# print the JSON string representation of the object
print(ListConsentArtifactsResponse.to_json())

# convert the object into a dict
list_consent_artifacts_response_dict = list_consent_artifacts_response_instance.to_dict()
# create an instance of ListConsentArtifactsResponse from a dict
list_consent_artifacts_response_from_dict = ListConsentArtifactsResponse.from_dict(list_consent_artifacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


