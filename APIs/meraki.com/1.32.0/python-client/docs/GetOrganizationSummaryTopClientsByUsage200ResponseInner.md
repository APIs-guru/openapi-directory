# GetOrganizationSummaryTopClientsByUsage200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of client | [optional] 
**mac** | **str** | MAC address of client | [optional] 
**name** | **str** | Name of client | [optional] 
**network** | [**GetOrganizationSummaryTopClientsByUsage200ResponseInnerNetwork**](GetOrganizationSummaryTopClientsByUsage200ResponseInnerNetwork.md) |  | [optional] 
**usage** | [**GetOrganizationSummaryTopClientsByUsage200ResponseInnerUsage**](GetOrganizationSummaryTopClientsByUsage200ResponseInnerUsage.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_summary_top_clients_by_usage200_response_inner import GetOrganizationSummaryTopClientsByUsage200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSummaryTopClientsByUsage200ResponseInner from a JSON string
get_organization_summary_top_clients_by_usage200_response_inner_instance = GetOrganizationSummaryTopClientsByUsage200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSummaryTopClientsByUsage200ResponseInner.to_json())

# convert the object into a dict
get_organization_summary_top_clients_by_usage200_response_inner_dict = get_organization_summary_top_clients_by_usage200_response_inner_instance.to_dict()
# create an instance of GetOrganizationSummaryTopClientsByUsage200ResponseInner from a dict
get_organization_summary_top_clients_by_usage200_response_inner_from_dict = GetOrganizationSummaryTopClientsByUsage200ResponseInner.from_dict(get_organization_summary_top_clients_by_usage200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


