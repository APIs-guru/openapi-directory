# ReleasesListLatest200ResponseInnerDistributionStoresInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID identifying a unique distribution store. | 
**name** | **str** | A name identifying a unique distribution store. | [optional] 
**publishing_status** | **str** | publishing status of the release in the store. | [optional] 
**type** | **str** | type of the distribution store currently stores type can be intune, googleplay or windows. | [optional] 
**is_latest** | **bool** | Is the containing release the latest one in this distribution store. | [optional] 

## Example

```python
from openapi_client.models.releases_list_latest200_response_inner_distribution_stores_inner import ReleasesListLatest200ResponseInnerDistributionStoresInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesListLatest200ResponseInnerDistributionStoresInner from a JSON string
releases_list_latest200_response_inner_distribution_stores_inner_instance = ReleasesListLatest200ResponseInnerDistributionStoresInner.from_json(json)
# print the JSON string representation of the object
print(ReleasesListLatest200ResponseInnerDistributionStoresInner.to_json())

# convert the object into a dict
releases_list_latest200_response_inner_distribution_stores_inner_dict = releases_list_latest200_response_inner_distribution_stores_inner_instance.to_dict()
# create an instance of ReleasesListLatest200ResponseInnerDistributionStoresInner from a dict
releases_list_latest200_response_inner_distribution_stores_inner_from_dict = ReleasesListLatest200ResponseInnerDistributionStoresInner.from_dict(releases_list_latest200_response_inner_distribution_stores_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


