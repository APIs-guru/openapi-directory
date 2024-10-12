# ProfileCreateParameters

Profile properties required for profile creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Profile location | 
**sku** | [**Sku**](Sku.md) |  | 
**tags** | **Dict[str, str]** | Profile tags | [optional] 

## Example

```python
from openapi_client.models.profile_create_parameters import ProfileCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileCreateParameters from a JSON string
profile_create_parameters_instance = ProfileCreateParameters.from_json(json)
# print the JSON string representation of the object
print(ProfileCreateParameters.to_json())

# convert the object into a dict
profile_create_parameters_dict = profile_create_parameters_instance.to_dict()
# create an instance of ProfileCreateParameters from a dict
profile_create_parameters_from_dict = ProfileCreateParameters.from_dict(profile_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


