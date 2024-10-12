# BetaAppReviewSubmissionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beta_review_state** | [**BetaReviewState**](BetaReviewState.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_app_review_submission_attributes import BetaAppReviewSubmissionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppReviewSubmissionAttributes from a JSON string
beta_app_review_submission_attributes_instance = BetaAppReviewSubmissionAttributes.from_json(json)
# print the JSON string representation of the object
print(BetaAppReviewSubmissionAttributes.to_json())

# convert the object into a dict
beta_app_review_submission_attributes_dict = beta_app_review_submission_attributes_instance.to_dict()
# create an instance of BetaAppReviewSubmissionAttributes from a dict
beta_app_review_submission_attributes_from_dict = BetaAppReviewSubmissionAttributes.from_dict(beta_app_review_submission_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


