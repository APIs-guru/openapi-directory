# ProvisionAUserToTheOrganization200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **str** | Timestamp of when this provision record was created. | [optional] 
**email** | **str** | The email of the user. | [optional] 
**role** | **str** | Name of the role granted for this user. | [optional] 
**role_public_id** | **str** | ID of the role to granted for this user. | [optional] 

## Example

```python
from openapi_client.models.provision_a_user_to_the_organization200_response import ProvisionAUserToTheOrganization200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisionAUserToTheOrganization200Response from a JSON string
provision_a_user_to_the_organization200_response_instance = ProvisionAUserToTheOrganization200Response.from_json(json)
# print the JSON string representation of the object
print(ProvisionAUserToTheOrganization200Response.to_json())

# convert the object into a dict
provision_a_user_to_the_organization200_response_dict = provision_a_user_to_the_organization200_response_instance.to_dict()
# create an instance of ProvisionAUserToTheOrganization200Response from a dict
provision_a_user_to_the_organization200_response_from_dict = ProvisionAUserToTheOrganization200Response.from_dict(provision_a_user_to_the_organization200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


