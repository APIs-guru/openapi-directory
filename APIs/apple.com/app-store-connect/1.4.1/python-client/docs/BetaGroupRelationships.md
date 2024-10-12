# BetaGroupRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppEncryptionDeclarationRelationshipsApp**](AppEncryptionDeclarationRelationshipsApp.md) |  | [optional] 
**beta_testers** | [**BetaGroupRelationshipsBetaTesters**](BetaGroupRelationshipsBetaTesters.md) |  | [optional] 
**builds** | [**AppRelationshipsBuilds**](AppRelationshipsBuilds.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_group_relationships import BetaGroupRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BetaGroupRelationships from a JSON string
beta_group_relationships_instance = BetaGroupRelationships.from_json(json)
# print the JSON string representation of the object
print(BetaGroupRelationships.to_json())

# convert the object into a dict
beta_group_relationships_dict = beta_group_relationships_instance.to_dict()
# create an instance of BetaGroupRelationships from a dict
beta_group_relationships_from_dict = BetaGroupRelationships.from_dict(beta_group_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


