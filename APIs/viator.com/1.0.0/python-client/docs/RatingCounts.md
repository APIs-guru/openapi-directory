# RatingCounts

**dictionary** of rating (stars) to number of reviews with each rating for *this* product\"  users rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)  - **note**: see response sample for structure 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_1** | **float** | Number of reviews with a one star rating | [optional] 
**var_2** | **float** | Number of reviews with a two star rating | [optional] 
**var_3** | **float** | Number of reviews with a three star rating | [optional] 
**var_4** | **float** | Number of reviews with a four star rating | [optional] 
**var_5** | **float** | Number of reviews with a five star rating | [optional] 

## Example

```python
from openapi_client.models.rating_counts import RatingCounts

# TODO update the JSON string below
json = "{}"
# create an instance of RatingCounts from a JSON string
rating_counts_instance = RatingCounts.from_json(json)
# print the JSON string representation of the object
print(RatingCounts.to_json())

# convert the object into a dict
rating_counts_dict = rating_counts_instance.to_dict()
# create an instance of RatingCounts from a dict
rating_counts_from_dict = RatingCounts.from_dict(rating_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


