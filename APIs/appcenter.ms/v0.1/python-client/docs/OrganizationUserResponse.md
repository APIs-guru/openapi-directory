# OrganizationUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The full name of the user. Might for example be first and last name | 
**email** | **str** | The email address of the user | 
**joined_at** | **str** | The date when the user joined the organization | 
**name** | **str** | The unique name that is used to identify the user. | 
**role** | **str** | The role the user has within the organization | 

## Example

```python
from openapi_client.models.organization_user_response import OrganizationUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationUserResponse from a JSON string
organization_user_response_instance = OrganizationUserResponse.from_json(json)
# print the JSON string representation of the object
print(OrganizationUserResponse.to_json())

# convert the object into a dict
organization_user_response_dict = organization_user_response_instance.to_dict()
# create an instance of OrganizationUserResponse from a dict
organization_user_response_from_dict = OrganizationUserResponse.from_dict(organization_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


