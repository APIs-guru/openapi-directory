# Organization



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 
**name** | **str** |  | 
**projects** | [**List[Project]**](Project.md) |  | [optional] [readonly] 
**slug** | **str** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**user_organizations** | [**List[UserOrganization]**](UserOrganization.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.organization import Organization

# TODO update the JSON string below
json = "{}"
# create an instance of Organization from a JSON string
organization_instance = Organization.from_json(json)
# print the JSON string representation of the object
print(Organization.to_json())

# convert the object into a dict
organization_dict = organization_instance.to_dict()
# create an instance of Organization from a dict
organization_from_dict = Organization.from_dict(organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


