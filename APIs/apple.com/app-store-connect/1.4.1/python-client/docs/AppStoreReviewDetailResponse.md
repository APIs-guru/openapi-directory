# AppStoreReviewDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreReviewDetail**](AppStoreReviewDetail.md) |  | 
**included** | [**List[AppStoreReviewAttachment]**](AppStoreReviewAttachment.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_store_review_detail_response import AppStoreReviewDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewDetailResponse from a JSON string
app_store_review_detail_response_instance = AppStoreReviewDetailResponse.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewDetailResponse.to_json())

# convert the object into a dict
app_store_review_detail_response_dict = app_store_review_detail_response_instance.to_dict()
# create an instance of AppStoreReviewDetailResponse from a dict
app_store_review_detail_response_from_dict = AppStoreReviewDetailResponse.from_dict(app_store_review_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


