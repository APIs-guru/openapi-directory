# ServicePlacementInvalidDomainPolicyDescription

Describes the policy to be used for placement of a Service Fabric service where a particular fault or upgrade domain should not be used for placement of the instances or replicas of that service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | The name of the domain that should not be used for placement. | [optional] 

## Example

```python
from openapi_client.models.service_placement_invalid_domain_policy_description import ServicePlacementInvalidDomainPolicyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServicePlacementInvalidDomainPolicyDescription from a JSON string
service_placement_invalid_domain_policy_description_instance = ServicePlacementInvalidDomainPolicyDescription.from_json(json)
# print the JSON string representation of the object
print(ServicePlacementInvalidDomainPolicyDescription.to_json())

# convert the object into a dict
service_placement_invalid_domain_policy_description_dict = service_placement_invalid_domain_policy_description_instance.to_dict()
# create an instance of ServicePlacementInvalidDomainPolicyDescription from a dict
service_placement_invalid_domain_policy_description_from_dict = ServicePlacementInvalidDomainPolicyDescription.from_dict(service_placement_invalid_domain_policy_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


