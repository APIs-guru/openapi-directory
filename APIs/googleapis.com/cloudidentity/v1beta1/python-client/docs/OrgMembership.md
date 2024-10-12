# OrgMembership

A membership in an OrgUnit. An `OrgMembership` defines a relationship between an `OrgUnit` and an entity belonging to that `OrgUnit`, referred to as a \"member\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member** | **str** | Immutable. Org member id as full resource name. Format for shared drive resource: //drive.googleapis.com/drives/{$memberId} where &#x60;$memberId&#x60; is the &#x60;id&#x60; from [Drive API (V3) &#x60;Drive&#x60; resource](https://developers.google.com/drive/api/v3/reference/drives#resource). | [optional] 
**member_uri** | **str** | Uri with which you can read the member. This follows https://aip.dev/122 Format for shared drive resource: https://drive.googleapis.com/drive/v3/drives/{$memberId} where &#x60;$memberId&#x60; is the &#x60;id&#x60; from [Drive API (V3) &#x60;Drive&#x60; resource](https://developers.google.com/drive/api/v3/reference/drives#resource). | [optional] 
**name** | **str** | Required. Immutable. The [resource name](https://cloud.google.com/apis/design/resource_names) of the OrgMembership. Format: orgUnits/{$orgUnitId}/memberships/{$membership} The &#x60;$orgUnitId&#x60; is the &#x60;orgUnitId&#x60; from the [Admin SDK &#x60;OrgUnit&#x60; resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). The &#x60;$membership&#x60; shall be of the form &#x60;{$entityType};{$memberId}&#x60;, where &#x60;$entityType&#x60; is the enum value of [OrgMembership.EntityType], and &#x60;memberId&#x60; is the &#x60;id&#x60; from [Drive API (V3) &#x60;Drive&#x60; resource](https://developers.google.com/drive/api/v3/reference/drives#resource) for OrgMembership.EntityType.SHARED_DRIVE. | [optional] 
**type** | **str** | Immutable. Entity type for the org member. | [optional] 

## Example

```python
from openapi_client.models.org_membership import OrgMembership

# TODO update the JSON string below
json = "{}"
# create an instance of OrgMembership from a JSON string
org_membership_instance = OrgMembership.from_json(json)
# print the JSON string representation of the object
print(OrgMembership.to_json())

# convert the object into a dict
org_membership_dict = org_membership_instance.to_dict()
# create an instance of OrgMembership from a dict
org_membership_from_dict = OrgMembership.from_dict(org_membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


