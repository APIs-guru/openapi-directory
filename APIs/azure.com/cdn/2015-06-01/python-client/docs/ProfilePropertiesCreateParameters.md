# ProfilePropertiesCreateParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**Sku**](Sku.md) |  | 

## Example

```python
from openapi_client.models.profile_properties_create_parameters import ProfilePropertiesCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ProfilePropertiesCreateParameters from a JSON string
profile_properties_create_parameters_instance = ProfilePropertiesCreateParameters.from_json(json)
# print the JSON string representation of the object
print(ProfilePropertiesCreateParameters.to_json())

# convert the object into a dict
profile_properties_create_parameters_dict = profile_properties_create_parameters_instance.to_dict()
# create an instance of ProfilePropertiesCreateParameters from a dict
profile_properties_create_parameters_from_dict = ProfilePropertiesCreateParameters.from_dict(profile_properties_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


