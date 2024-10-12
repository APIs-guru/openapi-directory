# UserOrganization



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**functional_roles** | **List[str]** |  | 
**id** | **str** |  | [optional] [readonly] 
**organization** | **str** |  | [optional] [readonly] 
**user** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.user_organization import UserOrganization

# TODO update the JSON string below
json = "{}"
# create an instance of UserOrganization from a JSON string
user_organization_instance = UserOrganization.from_json(json)
# print the JSON string representation of the object
print(UserOrganization.to_json())

# convert the object into a dict
user_organization_dict = user_organization_instance.to_dict()
# create an instance of UserOrganization from a dict
user_organization_from_dict = UserOrganization.from_dict(user_organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


