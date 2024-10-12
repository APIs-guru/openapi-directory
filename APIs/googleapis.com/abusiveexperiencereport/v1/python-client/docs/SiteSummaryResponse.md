# SiteSummaryResponse

Response message for GetSiteSummary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abusive_status** | **str** | The site&#39;s Abusive Experience Report status. | [optional] 
**enforcement_time** | **str** | The time at which [enforcement](https://support.google.com/webtools/answer/7538608) against the site began or will begin. Not set when the filter_status is OFF. | [optional] 
**filter_status** | **str** | The site&#39;s [enforcement status](https://support.google.com/webtools/answer/7538608). | [optional] 
**last_change_time** | **str** | The time at which the site&#39;s status last changed. | [optional] 
**report_url** | **str** | A link to the full Abusive Experience Report for the site. Not set in ViolatingSitesResponse. Note that you must complete the [Search Console verification process](https://support.google.com/webmasters/answer/9008080) for the site before you can access the full report. | [optional] 
**reviewed_site** | **str** | The name of the reviewed site, e.g. &#x60;google.com&#x60;. | [optional] 
**under_review** | **bool** | Whether the site is currently under review. | [optional] 

## Example

```python
from openapi_client.models.site_summary_response import SiteSummaryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SiteSummaryResponse from a JSON string
site_summary_response_instance = SiteSummaryResponse.from_json(json)
# print the JSON string representation of the object
print(SiteSummaryResponse.to_json())

# convert the object into a dict
site_summary_response_dict = site_summary_response_instance.to_dict()
# create an instance of SiteSummaryResponse from a dict
site_summary_response_from_dict = SiteSummaryResponse.from_dict(site_summary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


