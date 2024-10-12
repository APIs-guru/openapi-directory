# GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse

Response from searching fact-checked claims.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claims** | [**List[GoogleFactcheckingFactchecktoolsV1alpha1Claim]**](GoogleFactcheckingFactchecktoolsV1alpha1Claim.md) | The list of claims and all of their associated information. | [optional] 
**next_page_token** | **str** | The next pagination token in the Search response. It should be used as the &#x60;page_token&#x60; for the following request. An empty value means no more results. | [optional] 

## Example

```python
from openapi_client.models.google_factchecking_factchecktools_v1alpha1_fact_checked_claim_search_response import GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse from a JSON string
google_factchecking_factchecktools_v1alpha1_fact_checked_claim_search_response_instance = GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse.to_json())

# convert the object into a dict
google_factchecking_factchecktools_v1alpha1_fact_checked_claim_search_response_dict = google_factchecking_factchecktools_v1alpha1_fact_checked_claim_search_response_instance.to_dict()
# create an instance of GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse from a dict
google_factchecking_factchecktools_v1alpha1_fact_checked_claim_search_response_from_dict = GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse.from_dict(google_factchecking_factchecktools_v1alpha1_fact_checked_claim_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


