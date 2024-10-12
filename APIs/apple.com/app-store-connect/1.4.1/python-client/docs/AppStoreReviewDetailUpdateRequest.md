# AppStoreReviewDetailUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreReviewDetailUpdateRequestData**](AppStoreReviewDetailUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_store_review_detail_update_request import AppStoreReviewDetailUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewDetailUpdateRequest from a JSON string
app_store_review_detail_update_request_instance = AppStoreReviewDetailUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewDetailUpdateRequest.to_json())

# convert the object into a dict
app_store_review_detail_update_request_dict = app_store_review_detail_update_request_instance.to_dict()
# create an instance of AppStoreReviewDetailUpdateRequest from a dict
app_store_review_detail_update_request_from_dict = AppStoreReviewDetailUpdateRequest.from_dict(app_store_review_detail_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


