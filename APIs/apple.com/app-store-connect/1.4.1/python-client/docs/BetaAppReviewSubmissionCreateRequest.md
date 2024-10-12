# BetaAppReviewSubmissionCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaAppReviewSubmissionCreateRequestData**](BetaAppReviewSubmissionCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.beta_app_review_submission_create_request import BetaAppReviewSubmissionCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppReviewSubmissionCreateRequest from a JSON string
beta_app_review_submission_create_request_instance = BetaAppReviewSubmissionCreateRequest.from_json(json)
# print the JSON string representation of the object
print(BetaAppReviewSubmissionCreateRequest.to_json())

# convert the object into a dict
beta_app_review_submission_create_request_dict = beta_app_review_submission_create_request_instance.to_dict()
# create an instance of BetaAppReviewSubmissionCreateRequest from a dict
beta_app_review_submission_create_request_from_dict = BetaAppReviewSubmissionCreateRequest.from_dict(beta_app_review_submission_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


