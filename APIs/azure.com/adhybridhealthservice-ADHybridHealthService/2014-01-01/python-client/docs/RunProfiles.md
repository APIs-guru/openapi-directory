# RunProfiles

The list of run profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[RunProfile]**](RunProfile.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.run_profiles import RunProfiles

# TODO update the JSON string below
json = "{}"
# create an instance of RunProfiles from a JSON string
run_profiles_instance = RunProfiles.from_json(json)
# print the JSON string representation of the object
print(RunProfiles.to_json())

# convert the object into a dict
run_profiles_dict = run_profiles_instance.to_dict()
# create an instance of RunProfiles from a dict
run_profiles_from_dict = RunProfiles.from_dict(run_profiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


