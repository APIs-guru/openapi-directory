# DoubleVerifyAppStarRating

Details of DoubleVerify star ratings settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avoid_insufficient_star_rating** | **bool** | Avoid bidding on apps with insufficient star ratings. | [optional] 
**avoided_star_rating** | **str** | Avoid bidding on apps with the star ratings. | [optional] 

## Example

```python
from openapi_client.models.double_verify_app_star_rating import DoubleVerifyAppStarRating

# TODO update the JSON string below
json = "{}"
# create an instance of DoubleVerifyAppStarRating from a JSON string
double_verify_app_star_rating_instance = DoubleVerifyAppStarRating.from_json(json)
# print the JSON string representation of the object
print(DoubleVerifyAppStarRating.to_json())

# convert the object into a dict
double_verify_app_star_rating_dict = double_verify_app_star_rating_instance.to_dict()
# create an instance of DoubleVerifyAppStarRating from a dict
double_verify_app_star_rating_from_dict = DoubleVerifyAppStarRating.from_dict(double_verify_app_star_rating_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


