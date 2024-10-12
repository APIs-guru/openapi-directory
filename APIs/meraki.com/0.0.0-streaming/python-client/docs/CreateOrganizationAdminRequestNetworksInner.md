# CreateOrganizationAdminRequestNetworksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | The privilege of the dashboard administrator on the network | 
**id** | **str** | The network ID | 

## Example

```python
from openapi_client.models.create_organization_admin_request_networks_inner import CreateOrganizationAdminRequestNetworksInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationAdminRequestNetworksInner from a JSON string
create_organization_admin_request_networks_inner_instance = CreateOrganizationAdminRequestNetworksInner.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationAdminRequestNetworksInner.to_json())

# convert the object into a dict
create_organization_admin_request_networks_inner_dict = create_organization_admin_request_networks_inner_instance.to_dict()
# create an instance of CreateOrganizationAdminRequestNetworksInner from a dict
create_organization_admin_request_networks_inner_from_dict = CreateOrganizationAdminRequestNetworksInner.from_dict(create_organization_admin_request_networks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


