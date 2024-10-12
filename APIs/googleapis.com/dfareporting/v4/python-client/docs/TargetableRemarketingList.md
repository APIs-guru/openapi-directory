# TargetableRemarketingList

Contains properties of a targetable remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource is a read-only view of a remarketing list to be used to facilitate targeting ads to specific lists. Remarketing lists that are owned by your advertisers and those that are shared to your advertisers or account are accessible via this resource. To manage remarketing lists that are owned by your advertisers, use the RemarketingLists resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. | [optional] 
**active** | **bool** | Whether this targetable remarketing list is active. | [optional] 
**advertiser_id** | **str** | Dimension value for the advertiser ID that owns this targetable remarketing list. | [optional] 
**advertiser_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**description** | **str** | Targetable remarketing list description. | [optional] 
**id** | **str** | Targetable remarketing list ID. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#targetableRemarketingList\&quot;. | [optional] 
**life_span** | **str** | Number of days that a user should remain in the targetable remarketing list without an impression. | [optional] 
**list_size** | **str** | Number of users currently in the list. This is a read-only field. | [optional] 
**list_source** | **str** | Product from which this targetable remarketing list was originated. | [optional] 
**name** | **str** | Name of the targetable remarketing list. Is no greater than 128 characters long. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. | [optional] 

## Example

```python
from openapi_client.models.targetable_remarketing_list import TargetableRemarketingList

# TODO update the JSON string below
json = "{}"
# create an instance of TargetableRemarketingList from a JSON string
targetable_remarketing_list_instance = TargetableRemarketingList.from_json(json)
# print the JSON string representation of the object
print(TargetableRemarketingList.to_json())

# convert the object into a dict
targetable_remarketing_list_dict = targetable_remarketing_list_instance.to_dict()
# create an instance of TargetableRemarketingList from a dict
targetable_remarketing_list_from_dict = TargetableRemarketingList.from_dict(targetable_remarketing_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


