# Refinement

This type defines the fields for the various refinements of an item. You can use the information in this container to create histograms, which help shoppers choose exactly what they want.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_distributions** | [**List[AspectDistribution]**](AspectDistribution.md) | An array of containers for the all the aspect refinements. | [optional] 
**buying_option_distributions** | [**List[BuyingOptionDistribution]**](BuyingOptionDistribution.md) | An array of containers for the all the buying option refinements. | [optional] 
**category_distributions** | [**List[CategoryDistribution]**](CategoryDistribution.md) | An array of containers for the all the category refinements. | [optional] 
**condition_distributions** | [**List[ConditionDistribution]**](ConditionDistribution.md) | An array of containers for the all the condition refinements. | [optional] 
**dominant_category_id** | **str** | The identifier of the category that most of the items are part of. | [optional] 

## Example

```python
from openapi_client.models.refinement import Refinement

# TODO update the JSON string below
json = "{}"
# create an instance of Refinement from a JSON string
refinement_instance = Refinement.from_json(json)
# print the JSON string representation of the object
print(Refinement.to_json())

# convert the object into a dict
refinement_dict = refinement_instance.to_dict()
# create an instance of Refinement from a dict
refinement_from_dict = Refinement.from_dict(refinement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


