# BetaAppReviewSubmissionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BetaAppReviewSubmission]**](BetaAppReviewSubmission.md) |  | 
**included** | [**List[Build]**](Build.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_app_review_submissions_response import BetaAppReviewSubmissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppReviewSubmissionsResponse from a JSON string
beta_app_review_submissions_response_instance = BetaAppReviewSubmissionsResponse.from_json(json)
# print the JSON string representation of the object
print(BetaAppReviewSubmissionsResponse.to_json())

# convert the object into a dict
beta_app_review_submissions_response_dict = beta_app_review_submissions_response_instance.to_dict()
# create an instance of BetaAppReviewSubmissionsResponse from a dict
beta_app_review_submissions_response_from_dict = BetaAppReviewSubmissionsResponse.from_dict(beta_app_review_submissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


