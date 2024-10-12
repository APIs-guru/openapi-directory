# ListManagedZonesResponse

Response message for ConnectorsService.ListManagedZones

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_zones** | [**List[ManagedZone]**](ManagedZone.md) | ManagedZones. | [optional] 
**next_page_token** | **str** | Next page token. | [optional] 

## Example

```python
from openapi_client.models.list_managed_zones_response import ListManagedZonesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListManagedZonesResponse from a JSON string
list_managed_zones_response_instance = ListManagedZonesResponse.from_json(json)
# print the JSON string representation of the object
print(ListManagedZonesResponse.to_json())

# convert the object into a dict
list_managed_zones_response_dict = list_managed_zones_response_instance.to_dict()
# create an instance of ListManagedZonesResponse from a dict
list_managed_zones_response_from_dict = ListManagedZonesResponse.from_dict(list_managed_zones_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


