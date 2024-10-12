# OrgDistributionGroupDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the distribution group | [optional] 
**id** | **str** | The unique ID of the distribution group | 
**is_public** | **bool** | Whether the distribution group is public | 
**name** | **str** | The name of the distribution group used in URLs | 
**origin** | **str** | The creation origin of this distribution group | 
**apps** | [**List[OrgDistributionGroupDetailsResponseAllOfApps]**](OrgDistributionGroupDetailsResponseAllOfApps.md) | The apps associated with the distribution group | 
**total_apps_count** | **float** | The count of apps associated with this distribution group | 
**total_users_count** | **float** | The count of users in the distribution group | 

## Example

```python
from openapi_client.models.org_distribution_group_details_response import OrgDistributionGroupDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrgDistributionGroupDetailsResponse from a JSON string
org_distribution_group_details_response_instance = OrgDistributionGroupDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(OrgDistributionGroupDetailsResponse.to_json())

# convert the object into a dict
org_distribution_group_details_response_dict = org_distribution_group_details_response_instance.to_dict()
# create an instance of OrgDistributionGroupDetailsResponse from a dict
org_distribution_group_details_response_from_dict = OrgDistributionGroupDetailsResponse.from_dict(org_distribution_group_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


