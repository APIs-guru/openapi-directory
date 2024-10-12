# ListConsentStoresResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_stores** | [**List[ConsentStore]**](ConsentStore.md) | The returned consent stores. The maximum number of stores returned is determined by the value of page_size in the ListConsentStoresRequest. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_consent_stores_response import ListConsentStoresResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConsentStoresResponse from a JSON string
list_consent_stores_response_instance = ListConsentStoresResponse.from_json(json)
# print the JSON string representation of the object
print(ListConsentStoresResponse.to_json())

# convert the object into a dict
list_consent_stores_response_dict = list_consent_stores_response_instance.to_dict()
# create an instance of ListConsentStoresResponse from a dict
list_consent_stores_response_from_dict = ListConsentStoresResponse.from_dict(list_consent_stores_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


