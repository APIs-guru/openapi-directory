# FlowEndpointsConfiguration

The endpoints configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector** | [**FlowEndpoints**](FlowEndpoints.md) |  | [optional] 
**workflow** | [**FlowEndpoints**](FlowEndpoints.md) |  | [optional] 

## Example

```python
from openapi_client.models.flow_endpoints_configuration import FlowEndpointsConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of FlowEndpointsConfiguration from a JSON string
flow_endpoints_configuration_instance = FlowEndpointsConfiguration.from_json(json)
# print the JSON string representation of the object
print(FlowEndpointsConfiguration.to_json())

# convert the object into a dict
flow_endpoints_configuration_dict = flow_endpoints_configuration_instance.to_dict()
# create an instance of FlowEndpointsConfiguration from a dict
flow_endpoints_configuration_from_dict = FlowEndpointsConfiguration.from_dict(flow_endpoints_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


