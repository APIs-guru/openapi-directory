# AspectDistribution

The type that define the fields for the aspect information. Aspects are the variations of an item, such as color, size, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_value_distributions** | [**List[AspectValueDistribution]**](AspectValueDistribution.md) | An array of containers for the various values of the aspect and the match count and a HATEOAS reference ( refinementHref) for this aspect. | [optional] 
**localized_aspect_name** | **str** | The name of an aspect, such as Brand, Color, etc. | [optional] 

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


