# ServicePlacementRequireDomainDistributionPolicyDescription

Describes the policy to be used for placement of a Service Fabric service where two replicas from the same partition should never be placed in the same fault or upgrade domain.  While this is not common it can expose the service to an increased risk of concurrent failures due to unplanned outages or other cases of subsequent/concurrent failures. As an example, consider a case where replicas are deployed across different data center, with one replica per location. In the event that one of the datacenters goes offline, normally the replica that was placed in that datacenter will be packed into one of the remaining datacenters. If this is not desirable then this policy should be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | The name of the domain that should used for placement as per this policy. | [optional] 

## Example

```python
from openapi_client.models.service_placement_require_domain_distribution_policy_description import ServicePlacementRequireDomainDistributionPolicyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServicePlacementRequireDomainDistributionPolicyDescription from a JSON string
service_placement_require_domain_distribution_policy_description_instance = ServicePlacementRequireDomainDistributionPolicyDescription.from_json(json)
# print the JSON string representation of the object
print(ServicePlacementRequireDomainDistributionPolicyDescription.to_json())

# convert the object into a dict
service_placement_require_domain_distribution_policy_description_dict = service_placement_require_domain_distribution_policy_description_instance.to_dict()
# create an instance of ServicePlacementRequireDomainDistributionPolicyDescription from a dict
service_placement_require_domain_distribution_policy_description_from_dict = ServicePlacementRequireDomainDistributionPolicyDescription.from_dict(service_placement_require_domain_distribution_policy_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


