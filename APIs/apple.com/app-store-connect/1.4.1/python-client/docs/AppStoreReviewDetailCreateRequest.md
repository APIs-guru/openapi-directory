# AppStoreReviewDetailCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreReviewDetailCreateRequestData**](AppStoreReviewDetailCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_store_review_detail_create_request import AppStoreReviewDetailCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewDetailCreateRequest from a JSON string
app_store_review_detail_create_request_instance = AppStoreReviewDetailCreateRequest.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewDetailCreateRequest.to_json())

# convert the object into a dict
app_store_review_detail_create_request_dict = app_store_review_detail_create_request_instance.to_dict()
# create an instance of AppStoreReviewDetailCreateRequest from a dict
app_store_review_detail_create_request_from_dict = AppStoreReviewDetailCreateRequest.from_dict(app_store_review_detail_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


