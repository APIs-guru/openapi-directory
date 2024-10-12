# AppStoreReviewDetailAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_email** | **str** |  | [optional] 
**contact_first_name** | **str** |  | [optional] 
**contact_last_name** | **str** |  | [optional] 
**contact_phone** | **str** |  | [optional] 
**demo_account_name** | **str** |  | [optional] 
**demo_account_password** | **str** |  | [optional] 
**demo_account_required** | **bool** |  | [optional] 
**notes** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.app_store_review_detail_attributes import AppStoreReviewDetailAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewDetailAttributes from a JSON string
app_store_review_detail_attributes_instance = AppStoreReviewDetailAttributes.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewDetailAttributes.to_json())

# convert the object into a dict
app_store_review_detail_attributes_dict = app_store_review_detail_attributes_instance.to_dict()
# create an instance of AppStoreReviewDetailAttributes from a dict
app_store_review_detail_attributes_from_dict = AppStoreReviewDetailAttributes.from_dict(app_store_review_detail_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


