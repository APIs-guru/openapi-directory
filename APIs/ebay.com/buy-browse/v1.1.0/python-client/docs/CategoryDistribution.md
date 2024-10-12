# CategoryDistribution

The container that defines the fields for the category refinements. This container is returned when <b> fieldgroups</b> is set to <code>CATEGORY_REFINEMENTS</code> or <code>FULL</code> in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **str** | The identifier of the category. | [optional] 
**category_name** | **str** | The name of the category, such as Baby &amp;amp; Toddler Clothing. | [optional] 
**match_count** | **int** | The number of items in this category. | [optional] 
**refinement_href** | **str** | The HATEOAS reference of this category. | [optional] 

## Example

```python
from openapi_client.models.category_distribution import CategoryDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryDistribution from a JSON string
category_distribution_instance = CategoryDistribution.from_json(json)
# print the JSON string representation of the object
print(CategoryDistribution.to_json())

# convert the object into a dict
category_distribution_dict = category_distribution_instance.to_dict()
# create an instance of CategoryDistribution from a dict
category_distribution_from_dict = CategoryDistribution.from_dict(category_distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


