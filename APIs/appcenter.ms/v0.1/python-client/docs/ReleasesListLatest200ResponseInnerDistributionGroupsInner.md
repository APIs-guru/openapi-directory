# ReleasesListLatest200ResponseInnerDistributionGroupsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID identifying a unique distribution group. | 
**name** | **str** | A name identifying a unique distribution group. | [optional] 
**is_latest** | **bool** | Is the containing release the latest one in this distribution group. | [optional] 

## Example

```python
from openapi_client.models.releases_list_latest200_response_inner_distribution_groups_inner import ReleasesListLatest200ResponseInnerDistributionGroupsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesListLatest200ResponseInnerDistributionGroupsInner from a JSON string
releases_list_latest200_response_inner_distribution_groups_inner_instance = ReleasesListLatest200ResponseInnerDistributionGroupsInner.from_json(json)
# print the JSON string representation of the object
print(ReleasesListLatest200ResponseInnerDistributionGroupsInner.to_json())

# convert the object into a dict
releases_list_latest200_response_inner_distribution_groups_inner_dict = releases_list_latest200_response_inner_distribution_groups_inner_instance.to_dict()
# create an instance of ReleasesListLatest200ResponseInnerDistributionGroupsInner from a dict
releases_list_latest200_response_inner_distribution_groups_inner_from_dict = ReleasesListLatest200ResponseInnerDistributionGroupsInner.from_dict(releases_list_latest200_response_inner_distribution_groups_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


