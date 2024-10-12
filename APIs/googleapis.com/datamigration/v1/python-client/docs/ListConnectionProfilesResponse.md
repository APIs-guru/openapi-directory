# ListConnectionProfilesResponse

Response message for 'ListConnectionProfiles' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_profiles** | [**List[ConnectionProfile]**](ConnectionProfile.md) | The response list of connection profiles. | [optional] 
**next_page_token** | **str** | A token which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_connection_profiles_response import ListConnectionProfilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConnectionProfilesResponse from a JSON string
list_connection_profiles_response_instance = ListConnectionProfilesResponse.from_json(json)
# print the JSON string representation of the object
print(ListConnectionProfilesResponse.to_json())

# convert the object into a dict
list_connection_profiles_response_dict = list_connection_profiles_response_instance.to_dict()
# create an instance of ListConnectionProfilesResponse from a dict
list_connection_profiles_response_from_dict = ListConnectionProfilesResponse.from_dict(list_connection_profiles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


