# ApplicationPropertiesComputeProfile

Describes the compute profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roles** | [**List[ApplicationPropertiesComputeProfileRolesInner]**](ApplicationPropertiesComputeProfileRolesInner.md) | The list of roles in the cluster. | [optional] 

## Example

```python
from openapi_client.models.application_properties_compute_profile import ApplicationPropertiesComputeProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPropertiesComputeProfile from a JSON string
application_properties_compute_profile_instance = ApplicationPropertiesComputeProfile.from_json(json)
# print the JSON string representation of the object
print(ApplicationPropertiesComputeProfile.to_json())

# convert the object into a dict
application_properties_compute_profile_dict = application_properties_compute_profile_instance.to_dict()
# create an instance of ApplicationPropertiesComputeProfile from a dict
application_properties_compute_profile_from_dict = ApplicationPropertiesComputeProfile.from_dict(application_properties_compute_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


