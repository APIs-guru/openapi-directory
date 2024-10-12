# CreativeGroup

Contains properties of a creative group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this creative group. This is a read-only field that can be left blank. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this creative group. This is a required field on insertion. | [optional] 
**advertiser_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**group_number** | **int** | Subgroup of the creative group. Assign your creative groups to a subgroup in order to filter or manage them more easily. This field is required on insertion and is read-only after insertion. Acceptable values are 1 to 2, inclusive. | [optional] 
**id** | **str** | ID of this creative group. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#creativeGroup\&quot;. | [optional] 
**name** | **str** | Name of this creative group. This is a required field and must be less than 256 characters long and unique among creative groups of the same advertiser. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this creative group. This is a read-only field that can be left blank. | [optional] 

## Example

```python
from openapi_client.models.creative_group import CreativeGroup

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeGroup from a JSON string
creative_group_instance = CreativeGroup.from_json(json)
# print the JSON string representation of the object
print(CreativeGroup.to_json())

# convert the object into a dict
creative_group_dict = creative_group_instance.to_dict()
# create an instance of CreativeGroup from a dict
creative_group_from_dict = CreativeGroup.from_dict(creative_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


