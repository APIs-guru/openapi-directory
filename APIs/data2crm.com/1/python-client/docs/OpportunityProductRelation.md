# OpportunityProductRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**OpportunityProductEntityRelation**](OpportunityProductEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.opportunity_product_relation import OpportunityProductRelation

# TODO update the JSON string below
json = "{}"
# create an instance of OpportunityProductRelation from a JSON string
opportunity_product_relation_instance = OpportunityProductRelation.from_json(json)
# print the JSON string representation of the object
print(OpportunityProductRelation.to_json())

# convert the object into a dict
opportunity_product_relation_dict = opportunity_product_relation_instance.to_dict()
# create an instance of OpportunityProductRelation from a dict
opportunity_product_relation_from_dict = OpportunityProductRelation.from_dict(opportunity_product_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


