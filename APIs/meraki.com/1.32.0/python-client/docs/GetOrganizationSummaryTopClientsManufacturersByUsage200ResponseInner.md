# GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clients** | [**GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInnerClients**](GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInnerClients.md) |  | [optional] 
**name** | **str** | Name of the manufacturer | [optional] 
**usage** | [**GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInnerUsage**](GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInnerUsage.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_summary_top_clients_manufacturers_by_usage200_response_inner import GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner from a JSON string
get_organization_summary_top_clients_manufacturers_by_usage200_response_inner_instance = GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner.to_json())

# convert the object into a dict
get_organization_summary_top_clients_manufacturers_by_usage200_response_inner_dict = get_organization_summary_top_clients_manufacturers_by_usage200_response_inner_instance.to_dict()
# create an instance of GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner from a dict
get_organization_summary_top_clients_manufacturers_by_usage200_response_inner_from_dict = GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner.from_dict(get_organization_summary_top_clients_manufacturers_by_usage200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


