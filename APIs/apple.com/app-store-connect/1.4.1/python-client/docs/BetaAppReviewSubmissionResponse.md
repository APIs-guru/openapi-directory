# BetaAppReviewSubmissionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaAppReviewSubmission**](BetaAppReviewSubmission.md) |  | 
**included** | [**List[Build]**](Build.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.beta_app_review_submission_response import BetaAppReviewSubmissionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppReviewSubmissionResponse from a JSON string
beta_app_review_submission_response_instance = BetaAppReviewSubmissionResponse.from_json(json)
# print the JSON string representation of the object
print(BetaAppReviewSubmissionResponse.to_json())

# convert the object into a dict
beta_app_review_submission_response_dict = beta_app_review_submission_response_instance.to_dict()
# create an instance of BetaAppReviewSubmissionResponse from a dict
beta_app_review_submission_response_from_dict = BetaAppReviewSubmissionResponse.from_dict(beta_app_review_submission_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


