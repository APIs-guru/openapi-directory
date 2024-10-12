# GoogleCloudRetailV2betaRating

The rating of a Product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_rating** | **float** | The average rating of the Product. The rating is scaled at 1-5. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**rating_count** | **int** | The total number of ratings. This value is independent of the value of rating_histogram. This value must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**rating_histogram** | **List[int]** | List of rating counts per rating value (index &#x3D; rating - 1). The list is empty if there is no rating. If the list is non-empty, its size is always 5. Otherwise, an INVALID_ARGUMENT error is returned. For example, [41, 14, 13, 47, 303]. It means that the Product got 41 ratings with 1 star, 14 ratings with 2 star, and so on. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_rating import GoogleCloudRetailV2betaRating

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaRating from a JSON string
google_cloud_retail_v2beta_rating_instance = GoogleCloudRetailV2betaRating.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaRating.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_rating_dict = google_cloud_retail_v2beta_rating_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaRating from a dict
google_cloud_retail_v2beta_rating_from_dict = GoogleCloudRetailV2betaRating.from_dict(google_cloud_retail_v2beta_rating_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


