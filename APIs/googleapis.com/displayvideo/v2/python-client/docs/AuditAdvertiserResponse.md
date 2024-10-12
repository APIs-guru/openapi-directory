# AuditAdvertiserResponse

Response message for AdvertiserService.AuditAdvertiser.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_criteria_count** | **str** | The number of individual targeting options from the following targeting types that are assigned to a line item under this advertiser. These individual targeting options count towards the limit of 4500000 ad group targeting options per advertiser. Qualifying Targeting types: * Channels, URLs, apps, and collections * Demographic * Google Audiences, including Affinity, Custom Affinity, and In-market audiences * Inventory source * Keyword * Mobile app category * User lists * Video targeting * Viewability | [optional] 
**campaign_criteria_count** | **str** | The number of individual targeting options from the following targeting types that are assigned to a line item under this advertiser. These individual targeting options count towards the limit of 900000 campaign targeting options per advertiser. Qualifying Targeting types: * Position * Browser * Connection speed * Day and time * Device and operating system * Digital content label * Sensitive categories * Environment * Geography, including business chains and proximity * ISP * Language * Third-party verification | [optional] 
**channels_count** | **str** | The number of channels created under this advertiser. These channels count towards the limit of 1000 channels per advertiser. | [optional] 
**negative_keyword_lists_count** | **str** | The number of negative keyword lists created under this advertiser. These negative keyword lists count towards the limit of 20 negative keyword lists per advertiser. | [optional] 
**negatively_targeted_channels_count** | **str** | The number of negatively targeted channels created under this advertiser. These negatively targeted channels count towards the limit of 5 negatively targeted channels per advertiser. | [optional] 
**used_campaigns_count** | **str** | The number of ACTIVE and PAUSED campaigns under this advertiser. These campaigns count towards the limit of 9999 campaigns per advertiser. | [optional] 
**used_insertion_orders_count** | **str** | The number of ACTIVE, PAUSED and DRAFT insertion orders under this advertiser. These insertion orders count towards the limit of 9999 insertion orders per advertiser. | [optional] 
**used_line_items_count** | **str** | The number of ACTIVE, PAUSED, and DRAFT line items under this advertiser. These line items count towards the limit of 9999 line items per advertiser. | [optional] 

## Example

```python
from openapi_client.models.audit_advertiser_response import AuditAdvertiserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AuditAdvertiserResponse from a JSON string
audit_advertiser_response_instance = AuditAdvertiserResponse.from_json(json)
# print the JSON string representation of the object
print(AuditAdvertiserResponse.to_json())

# convert the object into a dict
audit_advertiser_response_dict = audit_advertiser_response_instance.to_dict()
# create an instance of AuditAdvertiserResponse from a dict
audit_advertiser_response_from_dict = AuditAdvertiserResponse.from_dict(audit_advertiser_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


