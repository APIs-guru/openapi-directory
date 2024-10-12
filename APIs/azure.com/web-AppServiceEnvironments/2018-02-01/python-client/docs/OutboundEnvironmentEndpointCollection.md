# OutboundEnvironmentEndpointCollection

Collection of Outbound Environment Endpoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[OutboundEnvironmentEndpoint]**](OutboundEnvironmentEndpoint.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.outbound_environment_endpoint_collection import OutboundEnvironmentEndpointCollection

# TODO update the JSON string below
json = "{}"
# create an instance of OutboundEnvironmentEndpointCollection from a JSON string
outbound_environment_endpoint_collection_instance = OutboundEnvironmentEndpointCollection.from_json(json)
# print the JSON string representation of the object
print(OutboundEnvironmentEndpointCollection.to_json())

# convert the object into a dict
outbound_environment_endpoint_collection_dict = outbound_environment_endpoint_collection_instance.to_dict()
# create an instance of OutboundEnvironmentEndpointCollection from a dict
outbound_environment_endpoint_collection_from_dict = OutboundEnvironmentEndpointCollection.from_dict(outbound_environment_endpoint_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


