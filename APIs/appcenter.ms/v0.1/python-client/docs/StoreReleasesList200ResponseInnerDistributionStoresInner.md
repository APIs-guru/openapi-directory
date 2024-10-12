# StoreReleasesList200ResponseInnerDistributionStoresInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID identifying a unique distribution store. | [optional] 
**is_latest** | **bool** | Is the containing release the latest one in this distribution store. | [optional] 
**name** | **str** | A name identifying a unique distribution store. | [optional] 
**publishing_status** | **str** | A status identifying the status of release in the distribution store. | [optional] 
**type** | **str** | A type identifying the type of distribution store. | [optional] 

## Example

```python
from openapi_client.models.store_releases_list200_response_inner_distribution_stores_inner import StoreReleasesList200ResponseInnerDistributionStoresInner

# TODO update the JSON string below
json = "{}"
# create an instance of StoreReleasesList200ResponseInnerDistributionStoresInner from a JSON string
store_releases_list200_response_inner_distribution_stores_inner_instance = StoreReleasesList200ResponseInnerDistributionStoresInner.from_json(json)
# print the JSON string representation of the object
print(StoreReleasesList200ResponseInnerDistributionStoresInner.to_json())

# convert the object into a dict
store_releases_list200_response_inner_distribution_stores_inner_dict = store_releases_list200_response_inner_distribution_stores_inner_instance.to_dict()
# create an instance of StoreReleasesList200ResponseInnerDistributionStoresInner from a dict
store_releases_list200_response_inner_distribution_stores_inner_from_dict = StoreReleasesList200ResponseInnerDistributionStoresInner.from_dict(store_releases_list200_response_inner_distribution_stores_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


