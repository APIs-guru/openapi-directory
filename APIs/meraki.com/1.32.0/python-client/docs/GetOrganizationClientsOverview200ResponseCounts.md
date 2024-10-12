# GetOrganizationClientsOverview200ResponseCounts

Client count information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | Total number of clients with data usage in organization | [optional] 

## Example

```python
from openapi_client.models.get_organization_clients_overview200_response_counts import GetOrganizationClientsOverview200ResponseCounts

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationClientsOverview200ResponseCounts from a JSON string
get_organization_clients_overview200_response_counts_instance = GetOrganizationClientsOverview200ResponseCounts.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationClientsOverview200ResponseCounts.to_json())

# convert the object into a dict
get_organization_clients_overview200_response_counts_dict = get_organization_clients_overview200_response_counts_instance.to_dict()
# create an instance of GetOrganizationClientsOverview200ResponseCounts from a dict
get_organization_clients_overview200_response_counts_from_dict = GetOrganizationClientsOverview200ResponseCounts.from_dict(get_organization_clients_overview200_response_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


