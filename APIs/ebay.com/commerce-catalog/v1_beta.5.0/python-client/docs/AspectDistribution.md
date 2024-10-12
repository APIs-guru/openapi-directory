# AspectDistribution

This type contains information about one category aspect that is associated with a specified category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_value_distributions** | [**List[AspectValueDistribution]**](AspectValueDistribution.md) | Contains information about one or more values of the category aspect identified by &lt;b&gt;localizedAspectName&lt;/b&gt;.  | [optional] 
**localized_aspect_name** | **str** | The localized name of an aspect that is associated with the category identified by &lt;b&gt;dominantCategoryId&lt;/b&gt;. | [optional] 

## Example

```python
from openapi_client.models.aspect_distribution import AspectDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of AspectDistribution from a JSON string
aspect_distribution_instance = AspectDistribution.from_json(json)
# print the JSON string representation of the object
print(AspectDistribution.to_json())

# convert the object into a dict
aspect_distribution_dict = aspect_distribution_instance.to_dict()
# create an instance of AspectDistribution from a dict
aspect_distribution_from_dict = AspectDistribution.from_dict(aspect_distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


