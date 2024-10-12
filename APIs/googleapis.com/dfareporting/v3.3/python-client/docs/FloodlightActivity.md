# FloodlightActivity

Contains properties of a Floodlight activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this floodlight activity. This is a read-only field that can be left blank. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group&#39;s advertiser or the existing activity&#39;s advertiser. | [optional] 
**advertiser_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**cache_busting_type** | **str** | Code type used for cache busting in the generated tag. Applicable only when floodlightActivityGroupType is COUNTER and countingMethod is STANDARD_COUNTING or UNIQUE_COUNTING. | [optional] 
**counting_method** | **str** | Counting method for conversions for this floodlight activity. This is a required field. | [optional] 
**default_tags** | [**List[FloodlightActivityDynamicTag]**](FloodlightActivityDynamicTag.md) | Dynamic floodlight tags. | [optional] 
**expected_url** | **str** | URL where this tag will be deployed. If specified, must be less than 256 characters long. | [optional] 
**floodlight_activity_group_id** | **str** | Floodlight activity group ID of this floodlight activity. This is a required field. | [optional] 
**floodlight_activity_group_name** | **str** | Name of the associated floodlight activity group. This is a read-only field. | [optional] 
**floodlight_activity_group_tag_string** | **str** | Tag string of the associated floodlight activity group. This is a read-only field. | [optional] 
**floodlight_activity_group_type** | **str** | Type of the associated floodlight activity group. This is a read-only field. | [optional] 
**floodlight_configuration_id** | **str** | Floodlight configuration ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group&#39;s floodlight configuration or from the existing activity&#39;s floodlight configuration. | [optional] 
**floodlight_configuration_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**floodlight_tag_type** | **str** | The type of Floodlight tag this activity will generate. This is a required field. | [optional] 
**hidden** | **bool** | Whether this activity is archived. | [optional] 
**id** | **str** | ID of this floodlight activity. This is a read-only, auto-generated field. | [optional] 
**id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#floodlightActivity\&quot;. | [optional] 
**name** | **str** | Name of this floodlight activity. This is a required field. Must be less than 129 characters long and cannot contain quotes. | [optional] 
**notes** | **str** | General notes or implementation instructions for the tag. | [optional] 
**publisher_tags** | [**List[FloodlightActivityPublisherDynamicTag]**](FloodlightActivityPublisherDynamicTag.md) | Publisher dynamic floodlight tags. | [optional] 
**secure** | **bool** | Whether this tag should use SSL. | [optional] 
**ssl_compliant** | **bool** | Whether the floodlight activity is SSL-compliant. This is a read-only field, its value detected by the system from the floodlight tags. | [optional] 
**ssl_required** | **bool** | Whether this floodlight activity must be SSL-compliant. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this floodlight activity. This is a read-only field that can be left blank. | [optional] 
**tag_format** | **str** | Tag format type for the floodlight activity. If left blank, the tag format will default to HTML. | [optional] 
**tag_string** | **str** | Value of the cat&#x3D; parameter in the floodlight tag, which the ad servers use to identify the activity. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activities of the same activity group. This field is read-only after insertion. | [optional] 
**user_defined_variable_types** | **List[str]** | List of the user-defined variables used by this conversion tag. These map to the \&quot;u[1-100]&#x3D;\&quot; in the tags. Each of these can have a user defined type. Acceptable values are U1 to U100, inclusive.  | [optional] 

## Example

```python
from openapi_client.models.floodlight_activity import FloodlightActivity

# TODO update the JSON string below
json = "{}"
# create an instance of FloodlightActivity from a JSON string
floodlight_activity_instance = FloodlightActivity.from_json(json)
# print the JSON string representation of the object
print(FloodlightActivity.to_json())

# convert the object into a dict
floodlight_activity_dict = floodlight_activity_instance.to_dict()
# create an instance of FloodlightActivity from a dict
floodlight_activity_from_dict = FloodlightActivity.from_dict(floodlight_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


