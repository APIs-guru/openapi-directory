# GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage

Holds one or more instances of `ClaimReview` markup for a webpage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claim_review_author** | [**GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor**](GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor.md) |  | [optional] 
**claim_review_markups** | [**List[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup]**](GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup.md) | A list of individual claim reviews for this page. Each item in the list corresponds to one &#x60;ClaimReview&#x60; element. | [optional] 
**name** | **str** | The name of this &#x60;ClaimReview&#x60; markup page resource, in the form of &#x60;pages/{page_id}&#x60;. Except for update requests, this field is output-only and should not be set by the user. | [optional] 
**page_url** | **str** | The URL of the page associated with this &#x60;ClaimReview&#x60; markup. While every individual &#x60;ClaimReview&#x60; has its own URL field, semantically this is a page-level field, and each &#x60;ClaimReview&#x60; on this page will use this value unless individually overridden. Corresponds to &#x60;ClaimReview.url&#x60; | [optional] 
**publish_date** | **str** | The date when the fact check was published. Similar to the URL, semantically this is a page-level field, and each &#x60;ClaimReview&#x60; on this page will contain the same value. Corresponds to &#x60;ClaimReview.datePublished&#x60; | [optional] 
**version_id** | **str** | The version ID for this markup. Except for update requests, this field is output-only and should not be set by the user. | [optional] 

## Example

```python
from openapi_client.models.google_factchecking_factchecktools_v1alpha1_claim_review_markup_page import GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage from a JSON string
google_factchecking_factchecktools_v1alpha1_claim_review_markup_page_instance = GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage.from_json(json)
# print the JSON string representation of the object
print(GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage.to_json())

# convert the object into a dict
google_factchecking_factchecktools_v1alpha1_claim_review_markup_page_dict = google_factchecking_factchecktools_v1alpha1_claim_review_markup_page_instance.to_dict()
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage from a dict
google_factchecking_factchecktools_v1alpha1_claim_review_markup_page_from_dict = GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage.from_dict(google_factchecking_factchecktools_v1alpha1_claim_review_markup_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


