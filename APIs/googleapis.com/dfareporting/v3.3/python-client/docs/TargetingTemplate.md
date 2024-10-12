# TargetingTemplate

Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this targeting template. This is a required field on insert and is read-only after insert. | [optional] 
**advertiser_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**day_part_targeting** | [**DayPartTargeting**](DayPartTargeting.md) |  | [optional] 
**geo_targeting** | [**GeoTargeting**](GeoTargeting.md) |  | [optional] 
**id** | **str** | ID of this targeting template. This is a read-only, auto-generated field. | [optional] 
**key_value_targeting_expression** | [**KeyValueTargetingExpression**](KeyValueTargetingExpression.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#targetingTemplate\&quot;. | [optional] 
**language_targeting** | [**LanguageTargeting**](LanguageTargeting.md) |  | [optional] 
**list_targeting_expression** | [**ListTargetingExpression**](ListTargetingExpression.md) |  | [optional] 
**name** | **str** | Name of this targeting template. This field is required. It must be less than 256 characters long and unique within an advertiser. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert. | [optional] 
**technology_targeting** | [**TechnologyTargeting**](TechnologyTargeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.targeting_template import TargetingTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of TargetingTemplate from a JSON string
targeting_template_instance = TargetingTemplate.from_json(json)
# print the JSON string representation of the object
print(TargetingTemplate.to_json())

# convert the object into a dict
targeting_template_dict = targeting_template_instance.to_dict()
# create an instance of TargetingTemplate from a dict
targeting_template_from_dict = TargetingTemplate.from_dict(targeting_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


