# ProfileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Profile**](Profile.md) |  | 
**included** | [**List[ProfileResponseIncludedInner]**](ProfileResponseIncludedInner.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.profile_response import ProfileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileResponse from a JSON string
profile_response_instance = ProfileResponse.from_json(json)
# print the JSON string representation of the object
print(ProfileResponse.to_json())

# convert the object into a dict
profile_response_dict = profile_response_instance.to_dict()
# create an instance of ProfileResponse from a dict
profile_response_from_dict = ProfileResponse.from_dict(profile_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


