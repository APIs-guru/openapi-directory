# ServicePlacementNonPartiallyPlaceServicePolicyDescription

Describes the policy to be used for placement of a Service Fabric service where all replicas must be able to be placed in order for any replicas to be created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.service_placement_non_partially_place_service_policy_description import ServicePlacementNonPartiallyPlaceServicePolicyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServicePlacementNonPartiallyPlaceServicePolicyDescription from a JSON string
service_placement_non_partially_place_service_policy_description_instance = ServicePlacementNonPartiallyPlaceServicePolicyDescription.from_json(json)
# print the JSON string representation of the object
print(ServicePlacementNonPartiallyPlaceServicePolicyDescription.to_json())

# convert the object into a dict
service_placement_non_partially_place_service_policy_description_dict = service_placement_non_partially_place_service_policy_description_instance.to_dict()
# create an instance of ServicePlacementNonPartiallyPlaceServicePolicyDescription from a dict
service_placement_non_partially_place_service_policy_description_from_dict = ServicePlacementNonPartiallyPlaceServicePolicyDescription.from_dict(service_placement_non_partially_place_service_policy_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


