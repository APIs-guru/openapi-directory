# AspectRecommendations

This type is used by the aspectsRecommendation container, which is returned if eBay has found a listing with missing or invalid item aspects (ASPECTS_ADOPTION compliance type).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_aspect_name** | **str** | The name of the item aspect for which eBay has a recommendation. In many cases, the same item aspect(s) that are returned under the violationData array for ASPECTS_ADOPTION listing violations are also returned here Note: This name is always localized for the specified marketplace. | [optional] 
**suggested_values** | **List[str]** | One or more valid values for the corresponding item aspect (in localizedAspectName) are returned here. These suggested values for the item aspect depend on the listing category and on the information specified in the listing. Sellers should confirm accuracy of the values before applying them to the listing. Please use getItemAspectsForCategory in the Taxonomy API or GetCategorySpecifics in the Trading API to get a comprehensive list of required and recommended aspects for a given category and a list of supported aspect values for each. | [optional] 

## Example

```python
from openapi_client.models.aspect_recommendations import AspectRecommendations

# TODO update the JSON string below
json = "{}"
# create an instance of AspectRecommendations from a JSON string
aspect_recommendations_instance = AspectRecommendations.from_json(json)
# print the JSON string representation of the object
print(AspectRecommendations.to_json())

# convert the object into a dict
aspect_recommendations_dict = aspect_recommendations_instance.to_dict()
# create an instance of AspectRecommendations from a dict
aspect_recommendations_from_dict = AspectRecommendations.from_dict(aspect_recommendations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


