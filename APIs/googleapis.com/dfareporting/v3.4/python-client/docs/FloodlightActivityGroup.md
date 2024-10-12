# FloodlightActivityGroup

Contains properties of a Floodlight activity group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this floodlight activity group. This is a read-only field that can be left blank. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this floodlight activity group. If this field is left blank, the value will be copied over either from the floodlight configuration&#39;s advertiser or from the existing activity group&#39;s advertiser. | [optional] 
**advertiser_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**floodlight_configuration_id** | **str** | Floodlight configuration ID of this floodlight activity group. This is a required field. | [optional] 
**floodlight_configuration_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**id** | **str** | ID of this floodlight activity group. This is a read-only, auto-generated field. | [optional] 
**id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#floodlightActivityGroup\&quot;. | [optional] 
**name** | **str** | Name of this floodlight activity group. This is a required field. Must be less than 65 characters long and cannot contain quotes. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this floodlight activity group. This is a read-only field that can be left blank. | [optional] 
**tag_string** | **str** | Value of the type&#x3D; parameter in the floodlight tag, which the ad servers use to identify the activity group that the activity belongs to. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activity groups of the same floodlight configuration. This field is read-only after insertion. | [optional] 
**type** | **str** | Type of the floodlight activity group. This is a required field that is read-only after insertion. | [optional] 

## Example

```python
from openapi_client.models.floodlight_activity_group import FloodlightActivityGroup

# TODO update the JSON string below
json = "{}"
# create an instance of FloodlightActivityGroup from a JSON string
floodlight_activity_group_instance = FloodlightActivityGroup.from_json(json)
# print the JSON string representation of the object
print(FloodlightActivityGroup.to_json())

# convert the object into a dict
floodlight_activity_group_dict = floodlight_activity_group_instance.to_dict()
# create an instance of FloodlightActivityGroup from a dict
floodlight_activity_group_from_dict = FloodlightActivityGroup.from_dict(floodlight_activity_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


