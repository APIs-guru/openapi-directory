# RouteTablePropertiesFormat

Route Table resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | Gets provisioning state of the resource Updating/Deleting/Failed | [optional] 
**routes** | [**List[Route]**](Route.md) | Gets or sets Routes in a Route Table | [optional] 
**subnets** | [**List[Subnet]**](Subnet.md) | Gets collection of references to subnets | [optional] [readonly] 

## Example

```python
from openapi_client.models.route_table_properties_format import RouteTablePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of RouteTablePropertiesFormat from a JSON string
route_table_properties_format_instance = RouteTablePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(RouteTablePropertiesFormat.to_json())

# convert the object into a dict
route_table_properties_format_dict = route_table_properties_format_instance.to_dict()
# create an instance of RouteTablePropertiesFormat from a dict
route_table_properties_format_from_dict = RouteTablePropertiesFormat.from_dict(route_table_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


