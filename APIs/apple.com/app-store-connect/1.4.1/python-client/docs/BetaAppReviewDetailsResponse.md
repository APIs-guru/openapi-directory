# BetaAppReviewDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BetaAppReviewDetail]**](BetaAppReviewDetail.md) |  | 
**included** | [**List[App]**](App.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.beta_app_review_details_response import BetaAppReviewDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaAppReviewDetailsResponse from a JSON string
beta_app_review_details_response_instance = BetaAppReviewDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(BetaAppReviewDetailsResponse.to_json())

# convert the object into a dict
beta_app_review_details_response_dict = beta_app_review_details_response_instance.to_dict()
# create an instance of BetaAppReviewDetailsResponse from a dict
beta_app_review_details_response_from_dict = BetaAppReviewDetailsResponse.from_dict(beta_app_review_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


