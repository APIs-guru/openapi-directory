# BetaTesterRelationshipsApps


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppEncryptionDeclarationRelationshipsAppData]**](AppEncryptionDeclarationRelationshipsAppData.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_tester_relationships_apps import BetaTesterRelationshipsApps

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterRelationshipsApps from a JSON string
beta_tester_relationships_apps_instance = BetaTesterRelationshipsApps.from_json(json)
# print the JSON string representation of the object
print(BetaTesterRelationshipsApps.to_json())

# convert the object into a dict
beta_tester_relationships_apps_dict = beta_tester_relationships_apps_instance.to_dict()
# create an instance of BetaTesterRelationshipsApps from a dict
beta_tester_relationships_apps_from_dict = BetaTesterRelationshipsApps.from_dict(beta_tester_relationships_apps_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


