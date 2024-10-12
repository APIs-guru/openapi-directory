# ProfileListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Profile]**](Profile.md) | List of CDN profiles within a resource group. | [optional] 

## Example

```python
from openapi_client.models.profile_list_result import ProfileListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileListResult from a JSON string
profile_list_result_instance = ProfileListResult.from_json(json)
# print the JSON string representation of the object
print(ProfileListResult.to_json())

# convert the object into a dict
profile_list_result_dict = profile_list_result_instance.to_dict()
# create an instance of ProfileListResult from a dict
profile_list_result_from_dict = ProfileListResult.from_dict(profile_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


