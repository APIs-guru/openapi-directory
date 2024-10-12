# ListConsentRevisionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consents** | [**List[Consent]**](Consent.md) | The returned Consent revisions. The maximum number of revisions returned is determined by the value of &#x60;page_size&#x60; in the ListConsentRevisionsRequest. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_consent_revisions_response import ListConsentRevisionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConsentRevisionsResponse from a JSON string
list_consent_revisions_response_instance = ListConsentRevisionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListConsentRevisionsResponse.to_json())

# convert the object into a dict
list_consent_revisions_response_dict = list_consent_revisions_response_instance.to_dict()
# create an instance of ListConsentRevisionsResponse from a dict
list_consent_revisions_response_from_dict = ListConsentRevisionsResponse.from_dict(list_consent_revisions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


