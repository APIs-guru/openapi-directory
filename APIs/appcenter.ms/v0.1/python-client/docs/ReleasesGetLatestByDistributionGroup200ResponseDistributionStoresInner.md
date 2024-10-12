# ReleasesGetLatestByDistributionGroup200ResponseDistributionStoresInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID identifying a unique distribution store. | 
**name** | **str** | A name identifying a unique distribution store. | [optional] 
**publishing_status** | **str** | publishing status of the release in the store. | [optional] 
**type** | **str** | type of the distribution store currently stores type can be intune, googleplay or windows. | [optional] 

## Example

```python
from openapi_client.models.releases_get_latest_by_distribution_group200_response_distribution_stores_inner import ReleasesGetLatestByDistributionGroup200ResponseDistributionStoresInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesGetLatestByDistributionGroup200ResponseDistributionStoresInner from a JSON string
releases_get_latest_by_distribution_group200_response_distribution_stores_inner_instance = ReleasesGetLatestByDistributionGroup200ResponseDistributionStoresInner.from_json(json)
# print the JSON string representation of the object
print(ReleasesGetLatestByDistributionGroup200ResponseDistributionStoresInner.to_json())

# convert the object into a dict
releases_get_latest_by_distribution_group200_response_distribution_stores_inner_dict = releases_get_latest_by_distribution_group200_response_distribution_stores_inner_instance.to_dict()
# create an instance of ReleasesGetLatestByDistributionGroup200ResponseDistributionStoresInner from a dict
releases_get_latest_by_distribution_group200_response_distribution_stores_inner_from_dict = ReleasesGetLatestByDistributionGroup200ResponseDistributionStoresInner.from_dict(releases_get_latest_by_distribution_group200_response_distribution_stores_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


