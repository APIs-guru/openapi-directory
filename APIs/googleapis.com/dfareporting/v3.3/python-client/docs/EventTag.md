# EventTag

Contains properties of an event tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this event tag. This is a read-only field that can be left blank. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this event tag. This field or the campaignId field is required on insertion. | [optional] 
**advertiser_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**campaign_id** | **str** | Campaign ID of this event tag. This field or the advertiserId field is required on insertion. | [optional] 
**campaign_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**enabled_by_default** | **bool** | Whether this event tag should be automatically enabled for all of the advertiser&#39;s campaigns and ads. | [optional] 
**exclude_from_adx_requests** | **bool** | Whether to remove this event tag from ads that are trafficked through Display &amp; Video 360 to Ad Exchange. This may be useful if the event tag uses a pixel that is unapproved for Ad Exchange bids on one or more networks, such as the Google Display Network. | [optional] 
**id** | **str** | ID of this event tag. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#eventTag\&quot;. | [optional] 
**name** | **str** | Name of this event tag. This is a required field and must be less than 256 characters long. | [optional] 
**site_filter_type** | **str** | Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites. | [optional] 
**site_ids** | **List[str]** | Filter list of site IDs associated with this event tag. The siteFilterType determines whether this is a allowlist or blocklist filter. | [optional] 
**ssl_compliant** | **bool** | Whether this tag is SSL-compliant or not. This is a read-only field. | [optional] 
**status** | **str** | Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this event tag. This is a read-only field that can be left blank. | [optional] 
**type** | **str** | Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. This is a required field. | [optional] 
**url** | **str** | Payload URL for this event tag. The URL on a click-through event tag should have a landing page URL appended to the end of it. This field is required on insertion. | [optional] 
**url_escape_levels** | **int** | Number of times the landing page URL should be URL-escaped before being appended to the click-through event tag URL. Only applies to click-through event tags as specified by the event tag type. | [optional] 

## Example

```python
from openapi_client.models.event_tag import EventTag

# TODO update the JSON string below
json = "{}"
# create an instance of EventTag from a JSON string
event_tag_instance = EventTag.from_json(json)
# print the JSON string representation of the object
print(EventTag.to_json())

# convert the object into a dict
event_tag_dict = event_tag_instance.to_dict()
# create an instance of EventTag from a dict
event_tag_from_dict = EventTag.from_dict(event_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


