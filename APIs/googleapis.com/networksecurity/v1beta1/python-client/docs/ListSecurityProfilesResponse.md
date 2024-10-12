# ListSecurityProfilesResponse

Response returned by the ListSecurityProfiles method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If there might be more results than those appearing in this response, then &#x60;next_page_token&#x60; is included. To get the next set of results, call this method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60;. | [optional] 
**security_profiles** | [**List[SecurityProfile]**](SecurityProfile.md) | List of SecurityProfile resources. | [optional] 

## Example

```python
from openapi_client.models.list_security_profiles_response import ListSecurityProfilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSecurityProfilesResponse from a JSON string
list_security_profiles_response_instance = ListSecurityProfilesResponse.from_json(json)
# print the JSON string representation of the object
print(ListSecurityProfilesResponse.to_json())

# convert the object into a dict
list_security_profiles_response_dict = list_security_profiles_response_instance.to_dict()
# create an instance of ListSecurityProfilesResponse from a dict
list_security_profiles_response_from_dict = ListSecurityProfilesResponse.from_dict(list_security_profiles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


