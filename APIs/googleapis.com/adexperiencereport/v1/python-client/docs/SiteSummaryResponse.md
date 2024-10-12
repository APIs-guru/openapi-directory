# SiteSummaryResponse

Response message for GetSiteSummary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desktop_summary** | [**PlatformSummary**](PlatformSummary.md) |  | [optional] 
**mobile_summary** | [**PlatformSummary**](PlatformSummary.md) |  | [optional] 
**reviewed_site** | **str** | The name of the reviewed site, e.g. &#x60;google.com&#x60;. | [optional] 

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


