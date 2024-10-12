# UserOrganizationCreationWrite



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**functional_roles** | **List[str]** |  | 
**organization** | **str** |  | [optional] [readonly] 
**user** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.user_organization_creation_write import UserOrganizationCreationWrite

# TODO update the JSON string below
json = "{}"
# create an instance of UserOrganizationCreationWrite from a JSON string
user_organization_creation_write_instance = UserOrganizationCreationWrite.from_json(json)
# print the JSON string representation of the object
print(UserOrganizationCreationWrite.to_json())

# convert the object into a dict
user_organization_creation_write_dict = user_organization_creation_write_instance.to_dict()
# create an instance of UserOrganizationCreationWrite from a dict
user_organization_creation_write_from_dict = UserOrganizationCreationWrite.from_dict(user_organization_creation_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


