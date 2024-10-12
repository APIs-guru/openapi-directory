# RouteTable

RouteTable resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated | [optional] 
**properties** | [**RouteTablePropertiesFormat**](RouteTablePropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.route_table import RouteTable

# TODO update the JSON string below
json = "{}"
# create an instance of RouteTable from a JSON string
route_table_instance = RouteTable.from_json(json)
# print the JSON string representation of the object
print(RouteTable.to_json())

# convert the object into a dict
route_table_dict = route_table_instance.to_dict()
# create an instance of RouteTable from a dict
route_table_from_dict = RouteTable.from_dict(route_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


