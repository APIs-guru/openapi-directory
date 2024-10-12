# GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup

Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claim_appearances** | **List[str]** | A list of links to works in which this claim appears, aside from the one specified in &#x60;claim_first_appearance&#x60;. Corresponds to &#x60;ClaimReview.itemReviewed[@type&#x3D;Claim].appearance.url&#x60;. | [optional] 
**claim_author** | [**GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor**](GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor.md) |  | [optional] 
**claim_date** | **str** | The date when the claim was made or entered public discourse. Corresponds to &#x60;ClaimReview.itemReviewed.datePublished&#x60;. | [optional] 
**claim_first_appearance** | **str** | A link to a work in which this claim first appears. Corresponds to &#x60;ClaimReview.itemReviewed[@type&#x3D;Claim].firstAppearance.url&#x60;. | [optional] 
**claim_location** | **str** | The location where this claim was made. Corresponds to &#x60;ClaimReview.itemReviewed.name&#x60;. | [optional] 
**claim_reviewed** | **str** | A short summary of the claim being evaluated. Corresponds to &#x60;ClaimReview.claimReviewed&#x60;. | [optional] 
**rating** | [**GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating**](GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating.md) |  | [optional] 
**url** | **str** | This field is optional, and will default to the page URL. We provide this field to allow you the override the default value, but the only permitted override is the page URL plus an optional anchor link (\&quot;page jump\&quot;). Corresponds to &#x60;ClaimReview.url&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_factchecking_factchecktools_v1alpha1_claim_review_markup import GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup from a JSON string
google_factchecking_factchecktools_v1alpha1_claim_review_markup_instance = GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup.from_json(json)
# print the JSON string representation of the object
print(GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup.to_json())

# convert the object into a dict
google_factchecking_factchecktools_v1alpha1_claim_review_markup_dict = google_factchecking_factchecktools_v1alpha1_claim_review_markup_instance.to_dict()
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup from a dict
google_factchecking_factchecktools_v1alpha1_claim_review_markup_from_dict = GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup.from_dict(google_factchecking_factchecktools_v1alpha1_claim_review_markup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


