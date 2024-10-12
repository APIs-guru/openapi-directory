# OrganizationDetails

Details of the organization of the certificate issuer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_details** | [**List[AdministratorDetails]**](AdministratorDetails.md) | Details of the organization administrator. | [optional] 
**id** | **str** | Id of the organization. | [optional] 

## Example

```python
from openapi_client.models.organization_details import OrganizationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationDetails from a JSON string
organization_details_instance = OrganizationDetails.from_json(json)
# print the JSON string representation of the object
print(OrganizationDetails.to_json())

# convert the object into a dict
organization_details_dict = organization_details_instance.to_dict()
# create an instance of OrganizationDetails from a dict
organization_details_from_dict = OrganizationDetails.from_dict(organization_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


