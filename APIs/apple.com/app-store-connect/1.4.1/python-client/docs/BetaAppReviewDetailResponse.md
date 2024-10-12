# BetaAppReviewDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaAppReviewDetail**](BetaAppReviewDetail.md) |  | 
**included** | [**List[App]**](App.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.beta_app_review_detail_response import BetaAppReviewDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppReviewDetailResponse from a JSON string
beta_app_review_detail_response_instance = BetaAppReviewDetailResponse.from_json(json)
# print the JSON string representation of the object
print(BetaAppReviewDetailResponse.to_json())

# convert the object into a dict
beta_app_review_detail_response_dict = beta_app_review_detail_response_instance.to_dict()
# create an instance of BetaAppReviewDetailResponse from a dict
beta_app_review_detail_response_from_dict = BetaAppReviewDetailResponse.from_dict(beta_app_review_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


