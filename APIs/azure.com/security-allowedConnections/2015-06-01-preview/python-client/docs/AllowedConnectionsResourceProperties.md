# AllowedConnectionsResourceProperties

Describes the allowed traffic between Azure resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculated_date_time** | **datetime** | The UTC time on which the allowed connections resource was calculated | [optional] [readonly] 
**connectable_resources** | [**List[ConnectableResource]**](ConnectableResource.md) | List of connectable resources | [optional] [readonly] 

## Example

```python
from openapi_client.models.allowed_connections_resource_properties import AllowedConnectionsResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AllowedConnectionsResourceProperties from a JSON string
allowed_connections_resource_properties_instance = AllowedConnectionsResourceProperties.from_json(json)
# print the JSON string representation of the object
print(AllowedConnectionsResourceProperties.to_json())

# convert the object into a dict
allowed_connections_resource_properties_dict = allowed_connections_resource_properties_instance.to_dict()
# create an instance of AllowedConnectionsResourceProperties from a dict
allowed_connections_resource_properties_from_dict = AllowedConnectionsResourceProperties.from_dict(allowed_connections_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


