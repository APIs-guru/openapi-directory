# BetaGroupCreateRequestDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppPreOrderCreateRequestDataRelationshipsApp**](AppPreOrderCreateRequestDataRelationshipsApp.md) |  | 
**beta_testers** | [**BetaGroupCreateRequestDataRelationshipsBetaTesters**](BetaGroupCreateRequestDataRelationshipsBetaTesters.md) |  | [optional] 
**builds** | [**BetaGroupCreateRequestDataRelationshipsBuilds**](BetaGroupCreateRequestDataRelationshipsBuilds.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_group_create_request_data_relationships import BetaGroupCreateRequestDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BetaGroupCreateRequestDataRelationships from a JSON string
beta_group_create_request_data_relationships_instance = BetaGroupCreateRequestDataRelationships.from_json(json)
# print the JSON string representation of the object
print(BetaGroupCreateRequestDataRelationships.to_json())

# convert the object into a dict
beta_group_create_request_data_relationships_dict = beta_group_create_request_data_relationships_instance.to_dict()
# create an instance of BetaGroupCreateRequestDataRelationships from a dict
beta_group_create_request_data_relationships_from_dict = BetaGroupCreateRequestDataRelationships.from_dict(beta_group_create_request_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


