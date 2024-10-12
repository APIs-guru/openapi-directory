# GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating

Information about the claim rating.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**best_rating** | **int** | For numeric ratings, the best value possible in the scale from worst to best. Corresponds to &#x60;ClaimReview.reviewRating.bestRating&#x60;. | [optional] 
**image_url** | **str** | Corresponds to &#x60;ClaimReview.reviewRating.image&#x60;. | [optional] 
**rating_explanation** | **str** | Corresponds to &#x60;ClaimReview.reviewRating.ratingExplanation&#x60;. | [optional] 
**rating_value** | **int** | A numeric rating of this claim, in the range worstRating — bestRating inclusive. Corresponds to &#x60;ClaimReview.reviewRating.ratingValue&#x60;. | [optional] 
**textual_rating** | **str** | The truthfulness rating as a human-readible short word or phrase. Corresponds to &#x60;ClaimReview.reviewRating.alternateName&#x60;. | [optional] 
**worst_rating** | **int** | For numeric ratings, the worst value possible in the scale from worst to best. Corresponds to &#x60;ClaimReview.reviewRating.worstRating&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_factchecking_factchecktools_v1alpha1_claim_rating import GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating from a JSON string
google_factchecking_factchecktools_v1alpha1_claim_rating_instance = GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating.from_json(json)
# print the JSON string representation of the object
print(GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating.to_json())

# convert the object into a dict
google_factchecking_factchecktools_v1alpha1_claim_rating_dict = google_factchecking_factchecktools_v1alpha1_claim_rating_instance.to_dict()
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating from a dict
google_factchecking_factchecktools_v1alpha1_claim_rating_from_dict = GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating.from_dict(google_factchecking_factchecktools_v1alpha1_claim_rating_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


