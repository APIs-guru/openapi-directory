# DistributionGroupsDetailsForOrg200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the distribution group | [optional] 
**id** | **str** | The unique ID of the distribution group | 
**is_public** | **bool** | Whether the distribution group is public | 
**name** | **str** | The name of the distribution group used in URLs | 
**origin** | **str** | The creation origin of this distribution group | 
**apps** | [**List[AppsList200ResponseInner]**](AppsList200ResponseInner.md) | The apps associated with the distribution group | 
**total_apps_count** | **float** | The count of apps associated with this distribution group | 
**total_users_count** | **float** | The count of users in the distribution group | 

## Example

```python
from openapi_client.models.distribution_groups_details_for_org200_response_inner import DistributionGroupsDetailsForOrg200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupsDetailsForOrg200ResponseInner from a JSON string
distribution_groups_details_for_org200_response_inner_instance = DistributionGroupsDetailsForOrg200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupsDetailsForOrg200ResponseInner.to_json())

# convert the object into a dict
distribution_groups_details_for_org200_response_inner_dict = distribution_groups_details_for_org200_response_inner_instance.to_dict()
# create an instance of DistributionGroupsDetailsForOrg200ResponseInner from a dict
distribution_groups_details_for_org200_response_inner_from_dict = DistributionGroupsDetailsForOrg200ResponseInner.from_dict(distribution_groups_details_for_org200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


