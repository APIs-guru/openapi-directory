# DistributionGroupDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the distribution group | [optional] 
**id** | **str** | The unique ID of the distribution group | 
**is_public** | **bool** | Whether the distribution group is public | 
**name** | **str** | The name of the distribution group used in URLs | 
**origin** | **str** | The creation origin of this distribution group | 
**group_type** | **str** | Type of group (Default, HockeyAppDefault or MicrosoftDogfooding) | [optional] 
**is_shared** | **bool** | Whether the distribution group is shared group or not | 
**notified_user_count** | **float** | The count of non-pending users in the distribution group who will be notified by new releases | 
**total_apps_count** | **float** | The count of apps associated with this distribution group | 
**total_user_count** | **float** | The count of users in the distribution group | 
**users** | [**List[DistributionGroupsListUsers200ResponseInner]**](DistributionGroupsListUsers200ResponseInner.md) | The distribution group users | 

## Example

```python
from openapi_client.models.distribution_group_details_response import DistributionGroupDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupDetailsResponse from a JSON string
distribution_group_details_response_instance = DistributionGroupDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupDetailsResponse.to_json())

# convert the object into a dict
distribution_group_details_response_dict = distribution_group_details_response_instance.to_dict()
# create an instance of DistributionGroupDetailsResponse from a dict
distribution_group_details_response_from_dict = DistributionGroupDetailsResponse.from_dict(distribution_group_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


