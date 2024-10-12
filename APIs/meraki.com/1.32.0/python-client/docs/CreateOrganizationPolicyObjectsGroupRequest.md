# CreateOrganizationPolicyObjectsGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Category of a policy object group (one of: NetworkObjectGroup, GeoLocationGroup, PortObjectGroup, ApplicationGroup) | [optional] 
**name** | **str** | A name for the group of network addresses, unique within the organization (alphanumeric, space, dash, or underscore characters only) | 
**object_ids** | **List[int]** | A list of Policy Object ID&#39;s that this NetworkObjectGroup should be associated to (note: these ID&#39;s will replace the existing associated Policy Objects) | [optional] 

## Example

```python
from openapi_client.models.create_organization_policy_objects_group_request import CreateOrganizationPolicyObjectsGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationPolicyObjectsGroupRequest from a JSON string
create_organization_policy_objects_group_request_instance = CreateOrganizationPolicyObjectsGroupRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationPolicyObjectsGroupRequest.to_json())

# convert the object into a dict
create_organization_policy_objects_group_request_dict = create_organization_policy_objects_group_request_instance.to_dict()
# create an instance of CreateOrganizationPolicyObjectsGroupRequest from a dict
create_organization_policy_objects_group_request_from_dict = CreateOrganizationPolicyObjectsGroupRequest.from_dict(create_organization_policy_objects_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


