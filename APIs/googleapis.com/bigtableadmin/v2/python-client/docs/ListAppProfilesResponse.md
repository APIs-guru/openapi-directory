# ListAppProfilesResponse

Response message for BigtableInstanceAdmin.ListAppProfiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_profiles** | [**List[AppProfile]**](AppProfile.md) | The list of requested app profiles. | [optional] 
**failed_locations** | **List[str]** | Locations from which AppProfile information could not be retrieved, due to an outage or some other transient condition. AppProfiles from these locations may be missing from &#x60;app_profiles&#x60;. Values are of the form &#x60;projects//locations/&#x60; | [optional] 
**next_page_token** | **str** | Set if not all app profiles could be returned in a single response. Pass this value to &#x60;page_token&#x60; in another request to get the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_app_profiles_response import ListAppProfilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAppProfilesResponse from a JSON string
list_app_profiles_response_instance = ListAppProfilesResponse.from_json(json)
# print the JSON string representation of the object
print(ListAppProfilesResponse.to_json())

# convert the object into a dict
list_app_profiles_response_dict = list_app_profiles_response_instance.to_dict()
# create an instance of ListAppProfilesResponse from a dict
list_app_profiles_response_from_dict = ListAppProfilesResponse.from_dict(list_app_profiles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


