# ProvisionAUserToTheOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email of the user. | 
**role** | **str** | Deprecated. Name of the role to grant this user. Must be one of &#x60;ADMIN&#x60;, &#x60;COLLABORATOR&#x60;, or &#x60;RESTRICTED_COLLABORATOR&#x60;. This field is invalid if &#x60;rolePublicId&#x60; is supplied with the request. | [optional] 
**role_public_id** | **str** | ID of the role to grant this user. | [optional] 

## Example

```python
from openapi_client.models.provision_a_user_to_the_organization_request import ProvisionAUserToTheOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisionAUserToTheOrganizationRequest from a JSON string
provision_a_user_to_the_organization_request_instance = ProvisionAUserToTheOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(ProvisionAUserToTheOrganizationRequest.to_json())

# convert the object into a dict
provision_a_user_to_the_organization_request_dict = provision_a_user_to_the_organization_request_instance.to_dict()
# create an instance of ProvisionAUserToTheOrganizationRequest from a dict
provision_a_user_to_the_organization_request_from_dict = ProvisionAUserToTheOrganizationRequest.from_dict(provision_a_user_to_the_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


