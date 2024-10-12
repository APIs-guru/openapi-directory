# GoogleFactcheckingFactchecktoolsV1alpha1Claim

Information about the claim.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claim_date** | **str** | The date that the claim was made. | [optional] 
**claim_review** | [**List[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview]**](GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview.md) | One or more reviews of this claim (namely, a fact-checking article). | [optional] 
**claimant** | **str** | A person or organization stating the claim. For instance, \&quot;John Doe\&quot;. | [optional] 
**text** | **str** | The claim text. For instance, \&quot;Crime has doubled in the last 2 years.\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_factchecking_factchecktools_v1alpha1_claim import GoogleFactcheckingFactchecktoolsV1alpha1Claim

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1Claim from a JSON string
google_factchecking_factchecktools_v1alpha1_claim_instance = GoogleFactcheckingFactchecktoolsV1alpha1Claim.from_json(json)
# print the JSON string representation of the object
print(GoogleFactcheckingFactchecktoolsV1alpha1Claim.to_json())

# convert the object into a dict
google_factchecking_factchecktools_v1alpha1_claim_dict = google_factchecking_factchecktools_v1alpha1_claim_instance.to_dict()
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1Claim from a dict
google_factchecking_factchecktools_v1alpha1_claim_from_dict = GoogleFactcheckingFactchecktoolsV1alpha1Claim.from_dict(google_factchecking_factchecktools_v1alpha1_claim_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


