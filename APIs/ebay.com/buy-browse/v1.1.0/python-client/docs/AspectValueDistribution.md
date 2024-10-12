# AspectValueDistribution

The container that defines the fields for the conditions refinements. This container is returned when <b> fieldgroups</b> is set to <code>ASPECT_REFINEMENTS</code> or <code>FULL</code> in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_aspect_value** | **str** | The value of an aspect. For example, Red is a value for the aspect Color. | [optional] 
**match_count** | **int** | The number of items with this aspect. | [optional] 
**refinement_href** | **str** | A HATEOAS reference for this aspect. | [optional] 

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


