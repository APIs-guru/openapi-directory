# Refinement

This type identifies a product category and the aspects associated with that category. Each aspect distribution container returns the distribution of values that have been used for the aspect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_distributions** | [**List[AspectDistribution]**](AspectDistribution.md) | Contains information about one or more aspects that are associated with the category identified by &lt;b&gt;dominantCategoryId&lt;/b&gt;. | [optional] 
**dominant_category_id** | **str** | The ID of the category that eBay determines is most likely to cover the products matching the search criteria. | [optional] 

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


