# ProfileUpdateParameters

Properties required to update a profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Profile tags | [optional] 

## Example

```python
from openapi_client.models.profile_update_parameters import ProfileUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileUpdateParameters from a JSON string
profile_update_parameters_instance = ProfileUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ProfileUpdateParameters.to_json())

# convert the object into a dict
profile_update_parameters_dict = profile_update_parameters_instance.to_dict()
# create an instance of ProfileUpdateParameters from a dict
profile_update_parameters_from_dict = ProfileUpdateParameters.from_dict(profile_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


