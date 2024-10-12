# AspectValueDistribution

This type contains information about one value of a specified aspect. This value serves as a product refinement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_aspect_value** | **str** | The localized value of the category aspect identified by &lt;b&gt;refinement.aspectDistributions.localizedAspectName&lt;/b&gt;. | [optional] 
**match_count** | **int** | The number of times the value of &lt;b&gt;localizedAspectValue&lt;/b&gt; has been used for eBay product listings. By comparing this quantity to the &lt;b&gt;matchCount&lt;/b&gt; for other values of the same aspect, you can present a histogram of the values to sellers, who can use that information to select which aspect value is most appropriate for their product. You can then include the user-selected value in the the &lt;b&gt;search&lt;/b&gt; call&#39;s &lt;b&gt;aspect_filter&lt;/b&gt; parameter to refine your search. | [optional] 
**refinement_href** | **str** | A HATEOAS reference that further refines the search with this particular &lt;b&gt;localizedAspectValue&lt;/b&gt;. | [optional] 

## Example

```python
from openapi_client.models.aspect_value_distribution import AspectValueDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of AspectValueDistribution from a JSON string
aspect_value_distribution_instance = AspectValueDistribution.from_json(json)
# print the JSON string representation of the object
print(AspectValueDistribution.to_json())

# convert the object into a dict
aspect_value_distribution_dict = aspect_value_distribution_instance.to_dict()
# create an instance of AspectValueDistribution from a dict
aspect_value_distribution_from_dict = AspectValueDistribution.from_dict(aspect_value_distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


