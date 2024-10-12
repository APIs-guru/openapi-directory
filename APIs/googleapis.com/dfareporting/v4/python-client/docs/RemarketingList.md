# RemarketingList

Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. | [optional] 
**active** | **bool** | Whether this remarketing list is active. | [optional] 
**advertiser_id** | **str** | Dimension value for the advertiser ID that owns this remarketing list. This is a required field. | [optional] 
**advertiser_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**description** | **str** | Remarketing list description. | [optional] 
**id** | **str** | Remarketing list ID. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#remarketingList\&quot;. | [optional] 
**life_span** | **str** | Number of days that a user should remain in the remarketing list without an impression. Acceptable values are 1 to 540, inclusive. | [optional] 
**list_population_rule** | [**ListPopulationRule**](ListPopulationRule.md) |  | [optional] 
**list_size** | **str** | Number of users currently in the list. This is a read-only field. | [optional] 
**list_source** | **str** | Product from which this remarketing list was originated. | [optional] 
**name** | **str** | Name of the remarketing list. This is a required field. Must be no greater than 128 characters long. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. | [optional] 

## Example

```python
from openapi_client.models.remarketing_list import RemarketingList

# TODO update the JSON string below
json = "{}"
# create an instance of RemarketingList from a JSON string
remarketing_list_instance = RemarketingList.from_json(json)
# print the JSON string representation of the object
print(RemarketingList.to_json())

# convert the object into a dict
remarketing_list_dict = remarketing_list_instance.to_dict()
# create an instance of RemarketingList from a dict
remarketing_list_from_dict = RemarketingList.from_dict(remarketing_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


