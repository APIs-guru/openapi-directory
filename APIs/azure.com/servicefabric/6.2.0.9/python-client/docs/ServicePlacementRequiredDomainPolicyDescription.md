# ServicePlacementRequiredDomainPolicyDescription

Describes the policy to be used for placement of a Service Fabric service where the instances or replicas of that service must be placed in a particular domain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | The name of the domain that should used for placement as per this policy. | [optional] 

## Example

```python
from openapi_client.models.service_placement_required_domain_policy_description import ServicePlacementRequiredDomainPolicyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServicePlacementRequiredDomainPolicyDescription from a JSON string
service_placement_required_domain_policy_description_instance = ServicePlacementRequiredDomainPolicyDescription.from_json(json)
# print the JSON string representation of the object
print(ServicePlacementRequiredDomainPolicyDescription.to_json())

# convert the object into a dict
service_placement_required_domain_policy_description_dict = service_placement_required_domain_policy_description_instance.to_dict()
# create an instance of ServicePlacementRequiredDomainPolicyDescription from a dict
service_placement_required_domain_policy_description_from_dict = ServicePlacementRequiredDomainPolicyDescription.from_dict(service_placement_required_domain_policy_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


