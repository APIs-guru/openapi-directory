# GetOrganizationSummaryTopClientsByUsage200ResponseInnerUsage

Data usage information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downstream** | **float** | Downstream data usage by client | [optional] 
**percentage** | **float** | Percentage of total data usage by client | [optional] 
**total** | **float** | Total data usage by client | [optional] 
**upstream** | **float** | Upstream data usage by client | [optional] 

## Example

```python
from openapi_client.models.get_organization_summary_top_clients_by_usage200_response_inner_usage import GetOrganizationSummaryTopClientsByUsage200ResponseInnerUsage

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSummaryTopClientsByUsage200ResponseInnerUsage from a JSON string
get_organization_summary_top_clients_by_usage200_response_inner_usage_instance = GetOrganizationSummaryTopClientsByUsage200ResponseInnerUsage.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSummaryTopClientsByUsage200ResponseInnerUsage.to_json())

# convert the object into a dict
get_organization_summary_top_clients_by_usage200_response_inner_usage_dict = get_organization_summary_top_clients_by_usage200_response_inner_usage_instance.to_dict()
# create an instance of GetOrganizationSummaryTopClientsByUsage200ResponseInnerUsage from a dict
get_organization_summary_top_clients_by_usage200_response_inner_usage_from_dict = GetOrganizationSummaryTopClientsByUsage200ResponseInnerUsage.from_dict(get_organization_summary_top_clients_by_usage200_response_inner_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


