# ApplicationPropertiesComputeProfileRolesInnerAutoscale

The autoscale request parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | [**ApplicationPropertiesComputeProfileRolesInnerAutoscaleCapacity**](ApplicationPropertiesComputeProfileRolesInnerAutoscaleCapacity.md) |  | [optional] 
**recurrence** | [**ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrence**](ApplicationPropertiesComputeProfileRolesInnerAutoscaleRecurrence.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_properties_compute_profile_roles_inner_autoscale import ApplicationPropertiesComputeProfileRolesInnerAutoscale

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPropertiesComputeProfileRolesInnerAutoscale from a JSON string
application_properties_compute_profile_roles_inner_autoscale_instance = ApplicationPropertiesComputeProfileRolesInnerAutoscale.from_json(json)
# print the JSON string representation of the object
print(ApplicationPropertiesComputeProfileRolesInnerAutoscale.to_json())

# convert the object into a dict
application_properties_compute_profile_roles_inner_autoscale_dict = application_properties_compute_profile_roles_inner_autoscale_instance.to_dict()
# create an instance of ApplicationPropertiesComputeProfileRolesInnerAutoscale from a dict
application_properties_compute_profile_roles_inner_autoscale_from_dict = ApplicationPropertiesComputeProfileRolesInnerAutoscale.from_dict(application_properties_compute_profile_roles_inner_autoscale_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


