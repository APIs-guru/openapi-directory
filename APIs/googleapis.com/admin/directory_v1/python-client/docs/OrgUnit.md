# OrgUnit

Managing your account's organizational units allows you to configure your users' access to services and custom settings. For more information about common organizational unit tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-org-units.html). The customer's organizational unit hierarchy is limited to 35 levels of depth.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**block_inheritance** | **bool** | Determines if a sub-organizational unit can inherit the settings of the parent organization. The default value is &#x60;false&#x60;, meaning a sub-organizational unit inherits the settings of the nearest parent organizational unit. This field is deprecated. Setting it to &#x60;true&#x60; is no longer supported and can have _unintended consequences_. For more information about inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075). | [optional] 
**description** | **str** | Description of the organizational unit. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | The type of the API resource. For Orgunits resources, the value is &#x60;admin#directory#orgUnit&#x60;. | [optional] [default to 'admin#directory#orgUnit']
**name** | **str** | The organizational unit&#39;s path name. For example, an organizational unit&#39;s name within the /corp/support/sales_support parent path is sales_support. Required. | [optional] 
**org_unit_id** | **str** | The unique ID of the organizational unit. | [optional] 
**org_unit_path** | **str** | The full path to the organizational unit. The &#x60;orgUnitPath&#x60; is a derived property. When listed, it is derived from &#x60;parentOrgunitPath&#x60; and organizational unit&#39;s &#x60;name&#x60;. For example, for an organizational unit named &#39;apps&#39; under parent organization &#39;/engineering&#39;, the orgUnitPath is &#39;/engineering/apps&#39;. In order to edit an &#x60;orgUnitPath&#x60;, either update the name of the organization or the &#x60;parentOrgunitPath&#x60;. A user&#39;s organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user&#39;s access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [Update a user](/admin-sdk/directory/v1/guides/manage-users.html#update_user). | [optional] 
**parent_org_unit_id** | **str** | The unique ID of the parent organizational unit. Required, unless &#x60;parentOrgUnitPath&#x60; is set. | [optional] 
**parent_org_unit_path** | **str** | The organizational unit&#39;s parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless &#x60;parentOrgUnitId&#x60; is set. | [optional] 

## Example

```python
from openapi_client.models.org_unit import OrgUnit

# TODO update the JSON string below
json = "{}"
# create an instance of OrgUnit from a JSON string
org_unit_instance = OrgUnit.from_json(json)
# print the JSON string representation of the object
print(OrgUnit.to_json())

# convert the object into a dict
org_unit_dict = org_unit_instance.to_dict()
# create an instance of OrgUnit from a dict
org_unit_from_dict = OrgUnit.from_dict(org_unit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


