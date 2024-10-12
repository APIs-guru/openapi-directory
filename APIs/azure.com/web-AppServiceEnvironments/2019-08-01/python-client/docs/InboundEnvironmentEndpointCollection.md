# InboundEnvironmentEndpointCollection

Collection of Inbound Environment Endpoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[InboundEnvironmentEndpoint]**](InboundEnvironmentEndpoint.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.inbound_environment_endpoint_collection import InboundEnvironmentEndpointCollection

# TODO update the JSON string below
json = "{}"
# create an instance of InboundEnvironmentEndpointCollection from a JSON string
inbound_environment_endpoint_collection_instance = InboundEnvironmentEndpointCollection.from_json(json)
# print the JSON string representation of the object
print(InboundEnvironmentEndpointCollection.to_json())

# convert the object into a dict
inbound_environment_endpoint_collection_dict = inbound_environment_endpoint_collection_instance.to_dict()
# create an instance of InboundEnvironmentEndpointCollection from a dict
inbound_environment_endpoint_collection_from_dict = InboundEnvironmentEndpointCollection.from_dict(inbound_environment_endpoint_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


