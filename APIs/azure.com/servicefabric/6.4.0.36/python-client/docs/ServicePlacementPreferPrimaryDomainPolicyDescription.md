# ServicePlacementPreferPrimaryDomainPolicyDescription

Describes the policy to be used for placement of a Service Fabric service where the service's Primary replicas should optimally be placed in a particular domain.  This placement policy is usually used with fault domains in scenarios where the Service Fabric cluster is geographically distributed in order to indicate that a service's primary replica should be located in a particular fault domain, which in geo-distributed scenarios usually aligns with regional or datacenter boundaries. Note that since this is an optimization it is possible that the Primary replica may not end up located in this domain due to failures, capacity limits, or other constraints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | The name of the domain that should used for placement as per this policy. | [optional] 

## Example

```python
from openapi_client.models.service_placement_prefer_primary_domain_policy_description import ServicePlacementPreferPrimaryDomainPolicyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServicePlacementPreferPrimaryDomainPolicyDescription from a JSON string
service_placement_prefer_primary_domain_policy_description_instance = ServicePlacementPreferPrimaryDomainPolicyDescription.from_json(json)
# print the JSON string representation of the object
print(ServicePlacementPreferPrimaryDomainPolicyDescription.to_json())

# convert the object into a dict
service_placement_prefer_primary_domain_policy_description_dict = service_placement_prefer_primary_domain_policy_description_instance.to_dict()
# create an instance of ServicePlacementPreferPrimaryDomainPolicyDescription from a dict
service_placement_prefer_primary_domain_policy_description_from_dict = ServicePlacementPreferPrimaryDomainPolicyDescription.from_dict(service_placement_prefer_primary_domain_policy_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


