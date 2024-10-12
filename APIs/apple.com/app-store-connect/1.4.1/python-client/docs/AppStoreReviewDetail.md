# AppStoreReviewDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppStoreReviewDetailAttributes**](AppStoreReviewDetailAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppStoreReviewDetailRelationships**](AppStoreReviewDetailRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_store_review_detail import AppStoreReviewDetail

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewDetail from a JSON string
app_store_review_detail_instance = AppStoreReviewDetail.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewDetail.to_json())

# convert the object into a dict
app_store_review_detail_dict = app_store_review_detail_instance.to_dict()
# create an instance of AppStoreReviewDetail from a dict
app_store_review_detail_from_dict = AppStoreReviewDetail.from_dict(app_store_review_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


