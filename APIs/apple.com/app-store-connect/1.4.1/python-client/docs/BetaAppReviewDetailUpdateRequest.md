# BetaAppReviewDetailUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaAppReviewDetailUpdateRequestData**](BetaAppReviewDetailUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.beta_app_review_detail_update_request import BetaAppReviewDetailUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppReviewDetailUpdateRequest from a JSON string
beta_app_review_detail_update_request_instance = BetaAppReviewDetailUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(BetaAppReviewDetailUpdateRequest.to_json())

# convert the object into a dict
beta_app_review_detail_update_request_dict = beta_app_review_detail_update_request_instance.to_dict()
# create an instance of BetaAppReviewDetailUpdateRequest from a dict
beta_app_review_detail_update_request_from_dict = BetaAppReviewDetailUpdateRequest.from_dict(beta_app_review_detail_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


