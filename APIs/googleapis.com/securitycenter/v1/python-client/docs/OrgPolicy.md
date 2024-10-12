# OrgPolicy

Contains information about the org policies associated with the finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name of the org policy. Example: \&quot;organizations/{organization_id}/policies/{constraint_name}\&quot; | [optional] 

## Example

```python
from openapi_client.models.org_policy import OrgPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of OrgPolicy from a JSON string
org_policy_instance = OrgPolicy.from_json(json)
# print the JSON string representation of the object
print(OrgPolicy.to_json())

# convert the object into a dict
org_policy_dict = org_policy_instance.to_dict()
# create an instance of OrgPolicy from a dict
org_policy_from_dict = OrgPolicy.from_dict(org_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


