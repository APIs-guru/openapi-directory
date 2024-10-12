# ListManagementDnsZoneBindingsResponse

Response message for VmwareEngine.ListManagementDnsZoneBindings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**management_dns_zone_bindings** | [**List[ManagementDnsZoneBinding]**](ManagementDnsZoneBinding.md) | A list of management DNS zone bindings. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached when making an aggregated query using wildcards. | [optional] 

## Example

```python
from openapi_client.models.list_management_dns_zone_bindings_response import ListManagementDnsZoneBindingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListManagementDnsZoneBindingsResponse from a JSON string
list_management_dns_zone_bindings_response_instance = ListManagementDnsZoneBindingsResponse.from_json(json)
# print the JSON string representation of the object
print(ListManagementDnsZoneBindingsResponse.to_json())

# convert the object into a dict
list_management_dns_zone_bindings_response_dict = list_management_dns_zone_bindings_response_instance.to_dict()
# create an instance of ListManagementDnsZoneBindingsResponse from a dict
list_management_dns_zone_bindings_response_from_dict = ListManagementDnsZoneBindingsResponse.from_dict(list_management_dns_zone_bindings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


