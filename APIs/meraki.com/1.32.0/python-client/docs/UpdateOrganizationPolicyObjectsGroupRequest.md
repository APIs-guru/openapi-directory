# UpdateOrganizationPolicyObjectsGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | A name for the group of network addresses, unique within the organization (alphanumeric, space, dash, or underscore characters only) | [optional] 
**object_ids** | **List[int]** | A list of Policy Object ID&#39;s that this NetworkObjectGroup should be associated to (note: these ID&#39;s will replace the existing associated Policy Objects) | [optional] 

## Example

```python
from openapi_client.models.update_organization_policy_objects_group_request import UpdateOrganizationPolicyObjectsGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationPolicyObjectsGroupRequest from a JSON string
update_organization_policy_objects_group_request_instance = UpdateOrganizationPolicyObjectsGroupRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationPolicyObjectsGroupRequest.to_json())

# convert the object into a dict
update_organization_policy_objects_group_request_dict = update_organization_policy_objects_group_request_instance.to_dict()
# create an instance of UpdateOrganizationPolicyObjectsGroupRequest from a dict
update_organization_policy_objects_group_request_from_dict = UpdateOrganizationPolicyObjectsGroupRequest.from_dict(update_organization_policy_objects_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


