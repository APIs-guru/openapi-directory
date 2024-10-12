# Group

Groups are run by volunteer moderators and provide a way to group activity in a specific location. Because each group is usually run by different people, there can be variations in rules from group to group (eg. who is allowed to join, what is allowed to be posted, how often reposts are allowed). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | [**GroupCountry**](GroupCountry.md) |  | [optional] 
**group_id** | **str** |  | [optional] 
**has_questions** | **bool** | When true, anyone requesting membership to this group will be required to answer a new membership questionnaire. | [optional] 
**homepage** | **str** | A URL to the group homepage. | [optional] 
**identifier** | **str** | A unique identifier for the group that is used in URLs. | [optional] 
**latitude** | **float** |  | [optional] 
**longitude** | **float** |  | [optional] 
**member_count** | **int** | The number of members who belong to the group. | [optional] 
**membership** | [**GroupMembership**](GroupMembership.md) |  | [optional] 
**name** | **str** | The name of the group (not guaranteed to be unique). | [optional] 
**open_archives** | **bool** | When true, the group posts are viewable by anyone.  When false, the group posts can only be viewed by members of the group. | [optional] 
**open_membership** | **bool** | When true, the group allows anyone to join.  When false, the group moderators review and approve applicants. | [optional] 
**region** | [**GroupRegion**](GroupRegion.md) |  | [optional] 
**timezone** | **str** | The timezone that the group is in (eg. America/New_York). | [optional] 

## Example

```python
from openapi_client.models.group import Group

# TODO update the JSON string below
json = "{}"
# create an instance of Group from a JSON string
group_instance = Group.from_json(json)
# print the JSON string representation of the object
print(Group.to_json())

# convert the object into a dict
group_dict = group_instance.to_dict()
# create an instance of Group from a dict
group_from_dict = Group.from_dict(group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


