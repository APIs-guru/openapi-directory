# RequestReviewShoppingAdsRequest

Request message for the RequestReviewShoppingAds program method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region_code** | **str** | The code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country for which review is to be requested. | [optional] 

## Example

```python
from openapi_client.models.request_review_shopping_ads_request import RequestReviewShoppingAdsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RequestReviewShoppingAdsRequest from a JSON string
request_review_shopping_ads_request_instance = RequestReviewShoppingAdsRequest.from_json(json)
# print the JSON string representation of the object
print(RequestReviewShoppingAdsRequest.to_json())

# convert the object into a dict
request_review_shopping_ads_request_dict = request_review_shopping_ads_request_instance.to_dict()
# create an instance of RequestReviewShoppingAdsRequest from a dict
request_review_shopping_ads_request_from_dict = RequestReviewShoppingAdsRequest.from_dict(request_review_shopping_ads_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


