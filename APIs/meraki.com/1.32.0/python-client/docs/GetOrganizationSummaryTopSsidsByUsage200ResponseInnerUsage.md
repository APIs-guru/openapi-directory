# GetOrganizationSummaryTopSsidsByUsage200ResponseInnerUsage

Date usage of the SSID, in megabytes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downstream** | **float** | Downstream usage of the SSID | [optional] 
**percentage** | **float** | Percentage usage of the SSID | [optional] 
**total** | **float** | Total usage of the SSID | [optional] 
**upstream** | **float** | Upstream usage of the SSID | [optional] 

## Example

```python
from openapi_client.models.get_organization_summary_top_ssids_by_usage200_response_inner_usage import GetOrganizationSummaryTopSsidsByUsage200ResponseInnerUsage

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSummaryTopSsidsByUsage200ResponseInnerUsage from a JSON string
get_organization_summary_top_ssids_by_usage200_response_inner_usage_instance = GetOrganizationSummaryTopSsidsByUsage200ResponseInnerUsage.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSummaryTopSsidsByUsage200ResponseInnerUsage.to_json())

# convert the object into a dict
get_organization_summary_top_ssids_by_usage200_response_inner_usage_dict = get_organization_summary_top_ssids_by_usage200_response_inner_usage_instance.to_dict()
# create an instance of GetOrganizationSummaryTopSsidsByUsage200ResponseInnerUsage from a dict
get_organization_summary_top_ssids_by_usage200_response_inner_usage_from_dict = GetOrganizationSummaryTopSsidsByUsage200ResponseInnerUsage.from_dict(get_organization_summary_top_ssids_by_usage200_response_inner_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


