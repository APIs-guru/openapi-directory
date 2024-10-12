# ListProfilesResponse

ListProfileResponse contains the list of collected profiles for deployments in projects which the user has permissions to view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to receive the next page of results. This field maybe empty if there are no more profiles to fetch. | [optional] 
**profiles** | [**List[Profile]**](Profile.md) | List of profiles fetched. | [optional] 
**skipped_profiles** | **int** | Number of profiles that were skipped in the current page since they were not able to be fetched successfully. This should typically be zero. A non-zero value may indicate a transient failure, in which case if the number is too high for your use case, the call may be retried. | [optional] 

## Example

```python
from openapi_client.models.list_profiles_response import ListProfilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProfilesResponse from a JSON string
list_profiles_response_instance = ListProfilesResponse.from_json(json)
# print the JSON string representation of the object
print(ListProfilesResponse.to_json())

# convert the object into a dict
list_profiles_response_dict = list_profiles_response_instance.to_dict()
# create an instance of ListProfilesResponse from a dict
list_profiles_response_from_dict = ListProfilesResponse.from_dict(list_profiles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


