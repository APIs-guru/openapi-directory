# GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview

Information about a claim review.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The language this review was written in. For instance, \&quot;en\&quot; or \&quot;de\&quot;. | [optional] 
**publisher** | [**GoogleFactcheckingFactchecktoolsV1alpha1Publisher**](GoogleFactcheckingFactchecktoolsV1alpha1Publisher.md) |  | [optional] 
**review_date** | **str** | The date the claim was reviewed. | [optional] 
**textual_rating** | **str** | Textual rating. For instance, \&quot;Mostly false\&quot;. | [optional] 
**title** | **str** | The title of this claim review, if it can be determined. | [optional] 
**url** | **str** | The URL of this claim review. | [optional] 

## Example

```python
from openapi_client.models.google_factchecking_factchecktools_v1alpha1_claim_review import GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview from a JSON string
google_factchecking_factchecktools_v1alpha1_claim_review_instance = GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview.from_json(json)
# print the JSON string representation of the object
print(GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview.to_json())

# convert the object into a dict
google_factchecking_factchecktools_v1alpha1_claim_review_dict = google_factchecking_factchecktools_v1alpha1_claim_review_instance.to_dict()
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview from a dict
google_factchecking_factchecktools_v1alpha1_claim_review_from_dict = GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview.from_dict(google_factchecking_factchecktools_v1alpha1_claim_review_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


