# RatingAspectDistribution

The type that defines the field for the aspect rating details, such as the aspect rating value, usually TRUE or FALSE and the user count and percentage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The number of eBay users that choose this rating aspect value. | [optional] 
**percentage** | **str** | The percentage of the aspect rating value. &lt;br /&gt;&lt;br /&gt; &lt;b&gt; ratingAspectDistributions.percentage&lt;/b&gt; &#x3D;  &lt;b&gt; ratingAspectDistributions.count&lt;/b&gt; /  &lt;b&gt;ratingAspects.count&lt;/b&gt; | [optional] 
**value** | **str** | The rating aspect. For example: TRUE or FALSE | [optional] 

## Example

```python
from openapi_client.models.rating_aspect_distribution import RatingAspectDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of RatingAspectDistribution from a JSON string
rating_aspect_distribution_instance = RatingAspectDistribution.from_json(json)
# print the JSON string representation of the object
print(RatingAspectDistribution.to_json())

# convert the object into a dict
rating_aspect_distribution_dict = rating_aspect_distribution_instance.to_dict()
# create an instance of RatingAspectDistribution from a dict
rating_aspect_distribution_from_dict = RatingAspectDistribution.from_dict(rating_aspect_distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


