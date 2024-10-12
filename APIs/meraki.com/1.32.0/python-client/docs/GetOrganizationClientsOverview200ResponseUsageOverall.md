# GetOrganizationClientsOverview200ResponseUsageOverall

Overall data usage of all clients across organization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downstream** | **float** | Downstream data usage (in kb) of all clients across organization | [optional] 
**total** | **float** | Total data usage (in kb) of all clients across organization | [optional] 
**upstream** | **float** | Upstream data usage (in kb) of all clients across organization | [optional] 

## Example

```python
from openapi_client.models.get_organization_clients_overview200_response_usage_overall import GetOrganizationClientsOverview200ResponseUsageOverall

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationClientsOverview200ResponseUsageOverall from a JSON string
get_organization_clients_overview200_response_usage_overall_instance = GetOrganizationClientsOverview200ResponseUsageOverall.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationClientsOverview200ResponseUsageOverall.to_json())

# convert the object into a dict
get_organization_clients_overview200_response_usage_overall_dict = get_organization_clients_overview200_response_usage_overall_instance.to_dict()
# create an instance of GetOrganizationClientsOverview200ResponseUsageOverall from a dict
get_organization_clients_overview200_response_usage_overall_from_dict = GetOrganizationClientsOverview200ResponseUsageOverall.from_dict(get_organization_clients_overview200_response_usage_overall_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


