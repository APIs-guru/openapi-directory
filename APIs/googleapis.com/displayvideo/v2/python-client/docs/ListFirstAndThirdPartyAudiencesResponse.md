# ListFirstAndThirdPartyAudiencesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_and_third_party_audiences** | [**List[FirstAndThirdPartyAudience]**](FirstAndThirdPartyAudience.md) | The list of first and third party audiences. Audience size properties will not be included. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListFirstAndThirdPartyAudiences&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_first_and_third_party_audiences_response import ListFirstAndThirdPartyAudiencesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFirstAndThirdPartyAudiencesResponse from a JSON string
list_first_and_third_party_audiences_response_instance = ListFirstAndThirdPartyAudiencesResponse.from_json(json)
# print the JSON string representation of the object
print(ListFirstAndThirdPartyAudiencesResponse.to_json())

# convert the object into a dict
list_first_and_third_party_audiences_response_dict = list_first_and_third_party_audiences_response_instance.to_dict()
# create an instance of ListFirstAndThirdPartyAudiencesResponse from a dict
list_first_and_third_party_audiences_response_from_dict = ListFirstAndThirdPartyAudiencesResponse.from_dict(list_first_and_third_party_audiences_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


