# RatingAspect

The type that defines the fields for the product aspect ratings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The number of eBay users that rated the product on this aspect. | [optional] 
**description** | **str** | The name of the rating aspect. Camping tent examples: Is it lightweight? or Is it easy to set up? | [optional] 
**name** | **str** | The answer or value of the rating aspect. Camping tent examples: Lightweight or Easy to set up | [optional] 
**rating_aspect_distributions** | [**List[RatingAspectDistribution]**](RatingAspectDistribution.md) | The container for the details of the aspect rating. The details show the aspect rating value, usually TRUE or FALSE and the user count and percentage. | [optional] 

## Example

```python
from openapi_client.models.rating_aspect import RatingAspect

# TODO update the JSON string below
json = "{}"
# create an instance of RatingAspect from a JSON string
rating_aspect_instance = RatingAspect.from_json(json)
# print the JSON string representation of the object
print(RatingAspect.to_json())

# convert the object into a dict
rating_aspect_dict = rating_aspect_instance.to_dict()
# create an instance of RatingAspect from a dict
rating_aspect_from_dict = RatingAspect.from_dict(rating_aspect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


