# GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse

Response from listing `ClaimReview` markup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claim_review_markup_pages** | [**List[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage]**](GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage.md) | The result list of pages of &#x60;ClaimReview&#x60; markup. | [optional] 
**next_page_token** | **str** | The next pagination token in the Search response. It should be used as the &#x60;page_token&#x60; for the following request. An empty value means no more results. | [optional] 

## Example

```python
from openapi_client.models.google_factchecking_factchecktools_v1alpha1_list_claim_review_markup_pages_response import GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse from a JSON string
google_factchecking_factchecktools_v1alpha1_list_claim_review_markup_pages_response_instance = GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse.to_json())

# convert the object into a dict
google_factchecking_factchecktools_v1alpha1_list_claim_review_markup_pages_response_dict = google_factchecking_factchecktools_v1alpha1_list_claim_review_markup_pages_response_instance.to_dict()
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse from a dict
google_factchecking_factchecktools_v1alpha1_list_claim_review_markup_pages_response_from_dict = GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse.from_dict(google_factchecking_factchecktools_v1alpha1_list_claim_review_markup_pages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


