# PlacementGroup

Contains properties of a package or roadblock.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this placement group. This is a read-only field that can be left blank. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this placement group. This is a required field on insertion. | [optional] 
**advertiser_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**archived** | **bool** | Whether this placement group is archived. | [optional] 
**campaign_id** | **str** | Campaign ID of this placement group. This field is required on insertion. | [optional] 
**campaign_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**child_placement_ids** | **List[str]** | IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field. | [optional] 
**comment** | **str** | Comments for this placement group. | [optional] 
**content_category_id** | **str** | ID of the content category assigned to this placement group. | [optional] 
**create_info** | [**LastModifiedInfo**](LastModifiedInfo.md) |  | [optional] 
**directory_site_id** | **str** | Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated with this placement group. This is a required field that is read-only after insertion. | [optional] 
**directory_site_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**external_id** | **str** | External ID for this placement. | [optional] 
**id** | **str** | ID of this placement group. This is a read-only, auto-generated field. | [optional] 
**id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#placementGroup\&quot;. | [optional] 
**last_modified_info** | [**LastModifiedInfo**](LastModifiedInfo.md) |  | [optional] 
**name** | **str** | Name of this placement group. This is a required field and must be less than 256 characters long. | [optional] 
**placement_group_type** | **str** | Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion. | [optional] 
**placement_strategy_id** | **str** | ID of the placement strategy assigned to this placement group. | [optional] 
**pricing_schedule** | [**PricingSchedule**](PricingSchedule.md) |  | [optional] 
**primary_placement_id** | **str** | ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the primary field on all affected roadblock child placements. | [optional] 
**primary_placement_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**site_id** | **str** | Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement group. This is a required field that is read-only after insertion. | [optional] 
**site_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**subaccount_id** | **str** | Subaccount ID of this placement group. This is a read-only field that can be left blank. | [optional] 

## Example

```python
from openapi_client.models.placement_group import PlacementGroup

# TODO update the JSON string below
json = "{}"
# create an instance of PlacementGroup from a JSON string
placement_group_instance = PlacementGroup.from_json(json)
# print the JSON string representation of the object
print(PlacementGroup.to_json())

# convert the object into a dict
placement_group_dict = placement_group_instance.to_dict()
# create an instance of PlacementGroup from a dict
placement_group_from_dict = PlacementGroup.from_dict(placement_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


