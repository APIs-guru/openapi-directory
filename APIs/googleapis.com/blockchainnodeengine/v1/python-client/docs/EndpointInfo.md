# EndpointInfo

Contains endpoint information through which to interact with a blockchain node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**json_rpc_api_endpoint** | **str** | Output only. The assigned URL for the node JSON-RPC API endpoint. | [optional] [readonly] 
**websockets_api_endpoint** | **str** | Output only. The assigned URL for the node WebSockets API endpoint. | [optional] [readonly] 

## Example

```python
from openapi_client.models.endpoint_info import EndpointInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointInfo from a JSON string
endpoint_info_instance = EndpointInfo.from_json(json)
# print the JSON string representation of the object
print(EndpointInfo.to_json())

# convert the object into a dict
endpoint_info_dict = endpoint_info_instance.to_dict()
# create an instance of EndpointInfo from a dict
endpoint_info_from_dict = EndpointInfo.from_dict(endpoint_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


