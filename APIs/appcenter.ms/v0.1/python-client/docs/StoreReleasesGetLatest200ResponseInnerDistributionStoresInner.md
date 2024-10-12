# StoreReleasesGetLatest200ResponseInnerDistributionStoresInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID identifying a unique distribution store. | [optional] 
**name** | **str** | A name identifying a unique distribution store. | [optional] 
**publishing_status** | **str** | publishing status of the release in the store. | [optional] 
**type** | **str** | type of the distribution store currently stores type can be intune or googleplay. | [optional] 

## Example

```python
from openapi_client.models.store_releases_get_latest200_response_inner_distribution_stores_inner import StoreReleasesGetLatest200ResponseInnerDistributionStoresInner

# TODO update the JSON string below
json = "{}"
# create an instance of StoreReleasesGetLatest200ResponseInnerDistributionStoresInner from a JSON string
store_releases_get_latest200_response_inner_distribution_stores_inner_instance = StoreReleasesGetLatest200ResponseInnerDistributionStoresInner.from_json(json)
# print the JSON string representation of the object
print(StoreReleasesGetLatest200ResponseInnerDistributionStoresInner.to_json())

# convert the object into a dict
store_releases_get_latest200_response_inner_distribution_stores_inner_dict = store_releases_get_latest200_response_inner_distribution_stores_inner_instance.to_dict()
# create an instance of StoreReleasesGetLatest200ResponseInnerDistributionStoresInner from a dict
store_releases_get_latest200_response_inner_distribution_stores_inner_from_dict = StoreReleasesGetLatest200ResponseInnerDistributionStoresInner.from_dict(store_releases_get_latest200_response_inner_distribution_stores_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


