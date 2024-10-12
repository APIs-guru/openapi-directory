# VirtualHubRouteTable

VirtualHub route table

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routes** | [**List[VirtualHubRoute]**](VirtualHubRoute.md) | List of all routes. | [optional] 

## Example

```python
from openapi_client.models.virtual_hub_route_table import VirtualHubRouteTable

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualHubRouteTable from a JSON string
virtual_hub_route_table_instance = VirtualHubRouteTable.from_json(json)
# print the JSON string representation of the object
print(VirtualHubRouteTable.to_json())

# convert the object into a dict
virtual_hub_route_table_dict = virtual_hub_route_table_instance.to_dict()
# create an instance of VirtualHubRouteTable from a dict
virtual_hub_route_table_from_dict = VirtualHubRouteTable.from_dict(virtual_hub_route_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


