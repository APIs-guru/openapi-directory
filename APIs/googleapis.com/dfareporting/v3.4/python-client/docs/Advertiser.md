# Advertiser

Contains properties of a Campaign Manager advertiser.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this advertiser.This is a read-only field that can be left blank. | [optional] 
**advertiser_group_id** | **str** | ID of the advertiser group this advertiser belongs to. You can group advertisers for reporting purposes, allowing you to see aggregated information for all advertisers in each group. | [optional] 
**click_through_url_suffix** | **str** | Suffix added to click-through URL of ad creative associations under this advertiser. Must be less than 129 characters long. | [optional] 
**default_click_through_event_tag_id** | **str** | ID of the click-through event tag to apply by default to the landing pages of this advertiser&#39;s campaigns. | [optional] 
**default_email** | **str** | Default email address used in sender field for tag emails. | [optional] 
**floodlight_configuration_id** | **str** | Floodlight configuration ID of this advertiser. The floodlight configuration ID will be created automatically, so on insert this field should be left blank. This field can be set to another advertiser&#39;s floodlight configuration ID in order to share that advertiser&#39;s floodlight configuration with this advertiser, so long as: - This advertiser&#39;s original floodlight configuration is not already associated with floodlight activities or floodlight activity groups. - This advertiser&#39;s original floodlight configuration is not already shared with another advertiser.  | [optional] 
**floodlight_configuration_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**id** | **str** | ID of this advertiser. This is a read-only, auto-generated field. | [optional] 
**id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#advertiser\&quot;. | [optional] 
**name** | **str** | Name of this advertiser. This is a required field and must be less than 256 characters long and unique among advertisers of the same account. | [optional] 
**original_floodlight_configuration_id** | **str** | Original floodlight configuration before any sharing occurred. Set the floodlightConfigurationId of this advertiser to originalFloodlightConfigurationId to unshare the advertiser&#39;s current floodlight configuration. You cannot unshare an advertiser&#39;s floodlight configuration if the shared configuration has activities associated with any campaign or placement. | [optional] 
**status** | **str** | Status of this advertiser. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this advertiser.This is a read-only field that can be left blank. | [optional] 
**suspended** | **bool** | Suspension status of this advertiser. | [optional] 

## Example

```python
from openapi_client.models.advertiser import Advertiser

# TODO update the JSON string below
json = "{}"
# create an instance of Advertiser from a JSON string
advertiser_instance = Advertiser.from_json(json)
# print the JSON string representation of the object
print(Advertiser.to_json())

# convert the object into a dict
advertiser_dict = advertiser_instance.to_dict()
# create an instance of Advertiser from a dict
advertiser_from_dict = Advertiser.from_dict(advertiser_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


