# BetaTesterCreateRequestDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beta_groups** | [**BetaTesterCreateRequestDataRelationshipsBetaGroups**](BetaTesterCreateRequestDataRelationshipsBetaGroups.md) |  | [optional] 
**builds** | [**BetaGroupCreateRequestDataRelationshipsBuilds**](BetaGroupCreateRequestDataRelationshipsBuilds.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_tester_create_request_data_relationships import BetaTesterCreateRequestDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterCreateRequestDataRelationships from a JSON string
beta_tester_create_request_data_relationships_instance = BetaTesterCreateRequestDataRelationships.from_json(json)
# print the JSON string representation of the object
print(BetaTesterCreateRequestDataRelationships.to_json())

# convert the object into a dict
beta_tester_create_request_data_relationships_dict = beta_tester_create_request_data_relationships_instance.to_dict()
# create an instance of BetaTesterCreateRequestDataRelationships from a dict
beta_tester_create_request_data_relationships_from_dict = BetaTesterCreateRequestDataRelationships.from_dict(beta_tester_create_request_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


