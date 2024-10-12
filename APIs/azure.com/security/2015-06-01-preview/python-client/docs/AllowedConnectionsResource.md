# AllowedConnectionsResource

The resource whose properties describes the allowed traffic between Azure resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AllowedConnectionsResourceProperties**](AllowedConnectionsResourceProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 
**location** | **str** | Location where the resource is stored | [optional] [readonly] 

## Example

```python
from openapi_client.models.allowed_connections_resource import AllowedConnectionsResource

# TODO update the JSON string below
json = "{}"
# create an instance of AllowedConnectionsResource from a JSON string
allowed_connections_resource_instance = AllowedConnectionsResource.from_json(json)
# print the JSON string representation of the object
print(AllowedConnectionsResource.to_json())

# convert the object into a dict
allowed_connections_resource_dict = allowed_connections_resource_instance.to_dict()
# create an instance of AllowedConnectionsResource from a dict
allowed_connections_resource_from_dict = AllowedConnectionsResource.from_dict(allowed_connections_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


