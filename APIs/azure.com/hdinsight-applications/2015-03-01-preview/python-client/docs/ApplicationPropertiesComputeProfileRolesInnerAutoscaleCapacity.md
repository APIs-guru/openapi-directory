# ApplicationPropertiesComputeProfileRolesInnerAutoscaleCapacity

The load-based autoscale request parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_instance_count** | **int** | The maximum instance count of the cluster | [optional] 
**min_instance_count** | **int** | The minimum instance count of the cluster | [optional] 

## Example

```python
from openapi_client.models.application_properties_compute_profile_roles_inner_autoscale_capacity import ApplicationPropertiesComputeProfileRolesInnerAutoscaleCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPropertiesComputeProfileRolesInnerAutoscaleCapacity from a JSON string
application_properties_compute_profile_roles_inner_autoscale_capacity_instance = ApplicationPropertiesComputeProfileRolesInnerAutoscaleCapacity.from_json(json)
# print the JSON string representation of the object
print(ApplicationPropertiesComputeProfileRolesInnerAutoscaleCapacity.to_json())

# convert the object into a dict
application_properties_compute_profile_roles_inner_autoscale_capacity_dict = application_properties_compute_profile_roles_inner_autoscale_capacity_instance.to_dict()
# create an instance of ApplicationPropertiesComputeProfileRolesInnerAutoscaleCapacity from a dict
application_properties_compute_profile_roles_inner_autoscale_capacity_from_dict = ApplicationPropertiesComputeProfileRolesInnerAutoscaleCapacity.from_dict(application_properties_compute_profile_roles_inner_autoscale_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


