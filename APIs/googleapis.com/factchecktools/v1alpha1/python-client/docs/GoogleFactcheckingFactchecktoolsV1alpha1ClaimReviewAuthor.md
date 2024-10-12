# GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor

Information about the claim review author.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_url** | **str** | Corresponds to &#x60;ClaimReview.author.image&#x60;. | [optional] 
**name** | **str** | Name of the organization that is publishing the fact check. Corresponds to &#x60;ClaimReview.author.name&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_factchecking_factchecktools_v1alpha1_claim_review_author import GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor from a JSON string
google_factchecking_factchecktools_v1alpha1_claim_review_author_instance = GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor.from_json(json)
# print the JSON string representation of the object
print(GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor.to_json())

# convert the object into a dict
google_factchecking_factchecktools_v1alpha1_claim_review_author_dict = google_factchecking_factchecktools_v1alpha1_claim_review_author_instance.to_dict()
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor from a dict
google_factchecking_factchecktools_v1alpha1_claim_review_author_from_dict = GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor.from_dict(google_factchecking_factchecktools_v1alpha1_claim_review_author_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


