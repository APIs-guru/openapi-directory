# OpenShiftRouterProfile

Represents an OpenShift router

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fqdn** | **str** | Auto-allocated FQDN for the OpenShift router. | [optional] [readonly] 
**name** | **str** | Name of the router profile. | [optional] 
**public_subdomain** | **str** | DNS subdomain for OpenShift router. | [optional] [readonly] 

## Example

```python
from openapi_client.models.open_shift_router_profile import OpenShiftRouterProfile

# TODO update the JSON string below
json = "{}"
# create an instance of OpenShiftRouterProfile from a JSON string
open_shift_router_profile_instance = OpenShiftRouterProfile.from_json(json)
# print the JSON string representation of the object
print(OpenShiftRouterProfile.to_json())

# convert the object into a dict
open_shift_router_profile_dict = open_shift_router_profile_instance.to_dict()
# create an instance of OpenShiftRouterProfile from a dict
open_shift_router_profile_from_dict = OpenShiftRouterProfile.from_dict(open_shift_router_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


