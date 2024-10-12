# ProfileList

Defines a list of Profiles. It contains a list of Profile objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of Profile objects if there are any. | [optional] 
**value** | [**List[Profile]**](Profile.md) | List of Profiles within a resource group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.profile_list import ProfileList

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileList from a JSON string
profile_list_instance = ProfileList.from_json(json)
# print the JSON string representation of the object
print(ProfileList.to_json())

# convert the object into a dict
profile_list_dict = profile_list_instance.to_dict()
# create an instance of ProfileList from a dict
profile_list_from_dict = ProfileList.from_dict(profile_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


