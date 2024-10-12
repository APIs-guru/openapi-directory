# GetOrganizationClientsOverview200ResponseUsage

Usage information of all clients across organization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | Average data usage (in kb) of each client in organization | [optional] 
**overall** | [**GetOrganizationClientsOverview200ResponseUsageOverall**](GetOrganizationClientsOverview200ResponseUsageOverall.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_clients_overview200_response_usage import GetOrganizationClientsOverview200ResponseUsage

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationClientsOverview200ResponseUsage from a JSON string
get_organization_clients_overview200_response_usage_instance = GetOrganizationClientsOverview200ResponseUsage.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationClientsOverview200ResponseUsage.to_json())

# convert the object into a dict
get_organization_clients_overview200_response_usage_dict = get_organization_clients_overview200_response_usage_instance.to_dict()
# create an instance of GetOrganizationClientsOverview200ResponseUsage from a dict
get_organization_clients_overview200_response_usage_from_dict = GetOrganizationClientsOverview200ResponseUsage.from_dict(get_organization_clients_overview200_response_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


