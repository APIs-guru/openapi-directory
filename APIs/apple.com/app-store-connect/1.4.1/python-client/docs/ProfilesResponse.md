# ProfilesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Profile]**](Profile.md) |  | 
**included** | [**List[ProfileResponseIncludedInner]**](ProfileResponseIncludedInner.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.profiles_response import ProfilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProfilesResponse from a JSON string
profiles_response_instance = ProfilesResponse.from_json(json)
# print the JSON string representation of the object
print(ProfilesResponse.to_json())

# convert the object into a dict
profiles_response_dict = profiles_response_instance.to_dict()
# create an instance of ProfilesResponse from a dict
profiles_response_from_dict = ProfilesResponse.from_dict(profiles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


