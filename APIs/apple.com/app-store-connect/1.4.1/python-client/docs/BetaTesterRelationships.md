# BetaTesterRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps** | [**BetaTesterRelationshipsApps**](BetaTesterRelationshipsApps.md) |  | [optional] 
**beta_groups** | [**AppRelationshipsBetaGroups**](AppRelationshipsBetaGroups.md) |  | [optional] 
**builds** | [**AppRelationshipsBuilds**](AppRelationshipsBuilds.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_tester_relationships import BetaTesterRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterRelationships from a JSON string
beta_tester_relationships_instance = BetaTesterRelationships.from_json(json)
# print the JSON string representation of the object
print(BetaTesterRelationships.to_json())

# convert the object into a dict
beta_tester_relationships_dict = beta_tester_relationships_instance.to_dict()
# create an instance of BetaTesterRelationships from a dict
beta_tester_relationships_from_dict = BetaTesterRelationships.from_dict(beta_tester_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


