# ApiProfile

Represents the API profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | The API version. | [optional] 
**profile_version** | **str** | The profile version. | [optional] 

## Example

```python
from openapi_client.models.api_profile import ApiProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ApiProfile from a JSON string
api_profile_instance = ApiProfile.from_json(json)
# print the JSON string representation of the object
print(ApiProfile.to_json())

# convert the object into a dict
api_profile_dict = api_profile_instance.to_dict()
# create an instance of ApiProfile from a dict
api_profile_from_dict = ApiProfile.from_dict(api_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


