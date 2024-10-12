# CreateOrganizationAdminRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_method** | **str** | The method of authentication the user will use to sign in to the Meraki dashboard. Can be one of &#39;Email&#39; or &#39;Cisco SecureX Sign-On&#39;. The default is Email authentication | [optional] 
**email** | **str** | The email of the dashboard administrator. This attribute can not be updated. | 
**name** | **str** | The name of the dashboard administrator | 
**networks** | [**List[CreateOrganizationAdminRequestNetworksInner]**](CreateOrganizationAdminRequestNetworksInner.md) | The list of networks that the dashboard administrator has privileges on | [optional] 
**org_access** | **str** | The privilege of the dashboard administrator on the organization. Can be one of &#39;full&#39;, &#39;read-only&#39;, &#39;enterprise&#39; or &#39;none&#39; | 
**tags** | [**List[CreateOrganizationAdminRequestTagsInner]**](CreateOrganizationAdminRequestTagsInner.md) | The list of tags that the dashboard administrator has privileges on | [optional] 

## Example

```python
from openapi_client.models.create_organization_admin_request import CreateOrganizationAdminRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationAdminRequest from a JSON string
create_organization_admin_request_instance = CreateOrganizationAdminRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationAdminRequest.to_json())

# convert the object into a dict
create_organization_admin_request_dict = create_organization_admin_request_instance.to_dict()
# create an instance of CreateOrganizationAdminRequest from a dict
create_organization_admin_request_from_dict = CreateOrganizationAdminRequest.from_dict(create_organization_admin_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


