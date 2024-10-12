# BetaAppReviewSubmissionCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relationships** | [**BetaAppReviewSubmissionCreateRequestDataRelationships**](BetaAppReviewSubmissionCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_app_review_submission_create_request_data import BetaAppReviewSubmissionCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppReviewSubmissionCreateRequestData from a JSON string
beta_app_review_submission_create_request_data_instance = BetaAppReviewSubmissionCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(BetaAppReviewSubmissionCreateRequestData.to_json())

# convert the object into a dict
beta_app_review_submission_create_request_data_dict = beta_app_review_submission_create_request_data_instance.to_dict()
# create an instance of BetaAppReviewSubmissionCreateRequestData from a dict
beta_app_review_submission_create_request_data_from_dict = BetaAppReviewSubmissionCreateRequestData.from_dict(beta_app_review_submission_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


