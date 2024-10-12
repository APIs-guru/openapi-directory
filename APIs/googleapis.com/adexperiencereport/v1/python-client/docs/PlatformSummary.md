# PlatformSummary

A site's Ad Experience Report summary on a single platform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**better_ads_status** | **str** | The site&#39;s Ad Experience Report status on this platform. | [optional] 
**enforcement_time** | **str** | The time at which [enforcement](https://support.google.com/webtools/answer/7308033) against the site began or will begin on this platform. Not set when the filter_status is OFF. | [optional] 
**filter_status** | **str** | The site&#39;s [enforcement status](https://support.google.com/webtools/answer/7308033) on this platform. | [optional] 
**last_change_time** | **str** | The time at which the site&#39;s status last changed on this platform. | [optional] 
**region** | **List[str]** | The site&#39;s regions on this platform. No longer populated, because there is no longer any semantic difference between sites in different regions. | [optional] 
**report_url** | **str** | A link to the full Ad Experience Report for the site on this platform.. Not set in ViolatingSitesResponse. Note that you must complete the [Search Console verification process](https://support.google.com/webmasters/answer/9008080) for the site before you can access the full report. | [optional] 
**under_review** | **bool** | Whether the site is currently under review on this platform. | [optional] 

## Example

```python
from openapi_client.models.platform_summary import PlatformSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformSummary from a JSON string
platform_summary_instance = PlatformSummary.from_json(json)
# print the JSON string representation of the object
print(PlatformSummary.to_json())

# convert the object into a dict
platform_summary_dict = platform_summary_instance.to_dict()
# create an instance of PlatformSummary from a dict
platform_summary_from_dict = PlatformSummary.from_dict(platform_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


