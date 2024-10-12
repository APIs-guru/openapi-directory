# ListGoogleAudiencesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_audiences** | [**List[GoogleAudience]**](GoogleAudience.md) | The list of Google audiences. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListGoogleAudiences&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_google_audiences_response import ListGoogleAudiencesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGoogleAudiencesResponse from a JSON string
list_google_audiences_response_instance = ListGoogleAudiencesResponse.from_json(json)
# print the JSON string representation of the object
print(ListGoogleAudiencesResponse.to_json())

# convert the object into a dict
list_google_audiences_response_dict = list_google_audiences_response_instance.to_dict()
# create an instance of ListGoogleAudiencesResponse from a dict
list_google_audiences_response_from_dict = ListGoogleAudiencesResponse.from_dict(list_google_audiences_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


