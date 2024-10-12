# GetOrganizationSummaryTopSsidsByUsage200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clients** | [**GetOrganizationSummaryTopSsidsByUsage200ResponseInnerClients**](GetOrganizationSummaryTopSsidsByUsage200ResponseInnerClients.md) |  | [optional] 
**name** | **str** | Name of the SSID | [optional] 
**usage** | [**GetOrganizationSummaryTopSsidsByUsage200ResponseInnerUsage**](GetOrganizationSummaryTopSsidsByUsage200ResponseInnerUsage.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_summary_top_ssids_by_usage200_response_inner import GetOrganizationSummaryTopSsidsByUsage200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSummaryTopSsidsByUsage200ResponseInner from a JSON string
get_organization_summary_top_ssids_by_usage200_response_inner_instance = GetOrganizationSummaryTopSsidsByUsage200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSummaryTopSsidsByUsage200ResponseInner.to_json())

# convert the object into a dict
get_organization_summary_top_ssids_by_usage200_response_inner_dict = get_organization_summary_top_ssids_by_usage200_response_inner_instance.to_dict()
# create an instance of GetOrganizationSummaryTopSsidsByUsage200ResponseInner from a dict
get_organization_summary_top_ssids_by_usage200_response_inner_from_dict = GetOrganizationSummaryTopSsidsByUsage200ResponseInner.from_dict(get_organization_summary_top_ssids_by_usage200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


