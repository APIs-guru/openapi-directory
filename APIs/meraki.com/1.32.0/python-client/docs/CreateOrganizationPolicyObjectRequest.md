# CreateOrganizationPolicyObjectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Category of a policy object (one of: adaptivePolicy, network) | 
**cidr** | **str** | CIDR Value of a policy object (e.g. 10.11.12.1/24\&quot;) | [optional] 
**fqdn** | **str** | Fully qualified domain name of policy object (e.g. \&quot;example.com\&quot;) | [optional] 
**group_ids** | **List[int]** | The IDs of policy object groups the policy object belongs to | [optional] 
**ip** | **str** | IP Address of a policy object (e.g. \&quot;1.2.3.4\&quot;) | [optional] 
**mask** | **str** | Mask of a policy object (e.g. \&quot;255.255.0.0\&quot;) | [optional] 
**name** | **str** | Name of a policy object, unique within the organization (alphanumeric, space, dash, or underscore characters only) | 
**type** | **str** | Type of a policy object (one of: adaptivePolicyIpv4Cidr, cidr, fqdn, ipAndMask) | 

## Example

```python
from openapi_client.models.create_organization_policy_object_request import CreateOrganizationPolicyObjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationPolicyObjectRequest from a JSON string
create_organization_policy_object_request_instance = CreateOrganizationPolicyObjectRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationPolicyObjectRequest.to_json())

# convert the object into a dict
create_organization_policy_object_request_dict = create_organization_policy_object_request_instance.to_dict()
# create an instance of CreateOrganizationPolicyObjectRequest from a dict
create_organization_policy_object_request_from_dict = CreateOrganizationPolicyObjectRequest.from_dict(create_organization_policy_object_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


