# AppRelationshipsBetaGroups


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsBetaGroupsDataInner]**](AppRelationshipsBetaGroupsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_relationships_beta_groups import AppRelationshipsBetaGroups

# TODO update the JSON string below
json = "{}"
# create an instance of AppRelationshipsBetaGroups from a JSON string
app_relationships_beta_groups_instance = AppRelationshipsBetaGroups.from_json(json)
# print the JSON string representation of the object
print(AppRelationshipsBetaGroups.to_json())

# convert the object into a dict
app_relationships_beta_groups_dict = app_relationships_beta_groups_instance.to_dict()
# create an instance of AppRelationshipsBetaGroups from a dict
app_relationships_beta_groups_from_dict = AppRelationshipsBetaGroups.from_dict(app_relationships_beta_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


