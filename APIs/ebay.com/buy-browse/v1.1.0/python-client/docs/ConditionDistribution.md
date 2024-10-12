# ConditionDistribution

The container that defines the fields for the conditions refinements. This container is returned when <b> fieldgroups</b> is set to <code>CONDITION_REFINEMENTS</code> or <code>FULL</code> in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **str** | The text describing the condition of the item, such as New or Used. For a list of condition names, see Item Condition IDs and Names. Code so that your app gracefully handles any future changes to this list. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of &#39;Certified Refurbished&#39;, but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to &#39;Manufacturer Refurbished&#39;. | [optional] 
**condition_id** | **str** | The identifier of the condition. For example, 1000 is the identifier for NEW. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of &#39;Certified Refurbished&#39;, but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to &#39;Manufacturer Refurbished&#39;. | [optional] 
**match_count** | **int** | The number of items having the condition. | [optional] 
**refinement_href** | **str** | The HATEOAS reference of this condition. | [optional] 

## Example

```python
from openapi_client.models.condition_distribution import ConditionDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of ConditionDistribution from a JSON string
condition_distribution_instance = ConditionDistribution.from_json(json)
# print the JSON string representation of the object
print(ConditionDistribution.to_json())

# convert the object into a dict
condition_distribution_dict = condition_distribution_instance.to_dict()
# create an instance of ConditionDistribution from a dict
condition_distribution_from_dict = ConditionDistribution.from_dict(condition_distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


