# OpportunityRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**OpportunityEntityRelation**](OpportunityEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.opportunity_relation import OpportunityRelation

# TODO update the JSON string below
json = "{}"
# create an instance of OpportunityRelation from a JSON string
opportunity_relation_instance = OpportunityRelation.from_json(json)
# print the JSON string representation of the object
print(OpportunityRelation.to_json())

# convert the object into a dict
opportunity_relation_dict = opportunity_relation_instance.to_dict()
# create an instance of OpportunityRelation from a dict
opportunity_relation_from_dict = OpportunityRelation.from_dict(opportunity_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


