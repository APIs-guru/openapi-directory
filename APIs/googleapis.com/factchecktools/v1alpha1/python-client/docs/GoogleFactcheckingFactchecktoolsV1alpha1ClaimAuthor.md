# GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor

Information about the claim author.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_url** | **str** | Corresponds to &#x60;ClaimReview.itemReviewed.author.image&#x60;. | [optional] 
**job_title** | **str** | Corresponds to &#x60;ClaimReview.itemReviewed.author.jobTitle&#x60;. | [optional] 
**name** | **str** | A person or organization stating the claim. For instance, \&quot;John Doe\&quot;. Corresponds to &#x60;ClaimReview.itemReviewed.author.name&#x60;. | [optional] 
**same_as** | **str** | Corresponds to &#x60;ClaimReview.itemReviewed.author.sameAs&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_factchecking_factchecktools_v1alpha1_claim_author import GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor from a JSON string
google_factchecking_factchecktools_v1alpha1_claim_author_instance = GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor.from_json(json)
# print the JSON string representation of the object
print(GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor.to_json())

# convert the object into a dict
google_factchecking_factchecktools_v1alpha1_claim_author_dict = google_factchecking_factchecktools_v1alpha1_claim_author_instance.to_dict()
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor from a dict
google_factchecking_factchecktools_v1alpha1_claim_author_from_dict = GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor.from_dict(google_factchecking_factchecktools_v1alpha1_claim_author_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


