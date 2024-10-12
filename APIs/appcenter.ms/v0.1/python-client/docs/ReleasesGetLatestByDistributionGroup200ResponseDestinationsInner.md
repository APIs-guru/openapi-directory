# ReleasesGetLatestByDistributionGroup200ResponseDestinationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn&#39;t exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence. | 
**name** | **str** | Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn&#39;t exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence. | [optional] 
**is_latest** | **bool** | Is the containing release the latest one in this distribution store. | [optional] 
**publishing_status** | **str** | publishing status of the release in the store. | [optional] 
**type** | **str** | type of the distribution store currently stores type can be intune, googleplay or windows. | [optional] 
**destination_type** | **str** | Destination can be either store or group. | [optional] 
**display_name** | **str** | Display name for the group or tester | [optional] 

## Example

```python
from openapi_client.models.releases_get_latest_by_distribution_group200_response_destinations_inner import ReleasesGetLatestByDistributionGroup200ResponseDestinationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesGetLatestByDistributionGroup200ResponseDestinationsInner from a JSON string
releases_get_latest_by_distribution_group200_response_destinations_inner_instance = ReleasesGetLatestByDistributionGroup200ResponseDestinationsInner.from_json(json)
# print the JSON string representation of the object
print(ReleasesGetLatestByDistributionGroup200ResponseDestinationsInner.to_json())

# convert the object into a dict
releases_get_latest_by_distribution_group200_response_destinations_inner_dict = releases_get_latest_by_distribution_group200_response_destinations_inner_instance.to_dict()
# create an instance of ReleasesGetLatestByDistributionGroup200ResponseDestinationsInner from a dict
releases_get_latest_by_distribution_group200_response_destinations_inner_from_dict = ReleasesGetLatestByDistributionGroup200ResponseDestinationsInner.from_dict(releases_get_latest_by_distribution_group200_response_destinations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


