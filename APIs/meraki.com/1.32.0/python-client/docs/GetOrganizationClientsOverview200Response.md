# GetOrganizationClientsOverview200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**GetOrganizationClientsOverview200ResponseCounts**](GetOrganizationClientsOverview200ResponseCounts.md) |  | [optional] 
**usage** | [**GetOrganizationClientsOverview200ResponseUsage**](GetOrganizationClientsOverview200ResponseUsage.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_clients_overview200_response import GetOrganizationClientsOverview200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationClientsOverview200Response from a JSON string
get_organization_clients_overview200_response_instance = GetOrganizationClientsOverview200Response.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationClientsOverview200Response.to_json())

# convert the object into a dict
get_organization_clients_overview200_response_dict = get_organization_clients_overview200_response_instance.to_dict()
# create an instance of GetOrganizationClientsOverview200Response from a dict
get_organization_clients_overview200_response_from_dict = GetOrganizationClientsOverview200Response.from_dict(get_organization_clients_overview200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


