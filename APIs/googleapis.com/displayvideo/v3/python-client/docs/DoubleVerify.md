# DoubleVerify

Details of DoubleVerify settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_star_rating** | [**DoubleVerifyAppStarRating**](DoubleVerifyAppStarRating.md) |  | [optional] 
**avoided_age_ratings** | **List[str]** | Avoid bidding on apps with the age rating. | [optional] 
**brand_safety_categories** | [**DoubleVerifyBrandSafetyCategories**](DoubleVerifyBrandSafetyCategories.md) |  | [optional] 
**custom_segment_id** | **str** | The custom segment ID provided by DoubleVerify. The ID must start with \&quot;51\&quot; and consist of eight digits. Custom segment ID cannot be specified along with any of the following fields: * brand_safety_categories * avoided_age_ratings * app_star_rating * fraud_invalid_traffic | [optional] 
**display_viewability** | [**DoubleVerifyDisplayViewability**](DoubleVerifyDisplayViewability.md) |  | [optional] 
**fraud_invalid_traffic** | [**DoubleVerifyFraudInvalidTraffic**](DoubleVerifyFraudInvalidTraffic.md) |  | [optional] 
**video_viewability** | [**DoubleVerifyVideoViewability**](DoubleVerifyVideoViewability.md) |  | [optional] 

## Example

```python
from openapi_client.models.double_verify import DoubleVerify

# TODO update the JSON string below
json = "{}"
# create an instance of DoubleVerify from a JSON string
double_verify_instance = DoubleVerify.from_json(json)
# print the JSON string representation of the object
print(DoubleVerify.to_json())

# convert the object into a dict
double_verify_dict = double_verify_instance.to_dict()
# create an instance of DoubleVerify from a dict
double_verify_from_dict = DoubleVerify.from_dict(double_verify_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


