# Tunnelv1ProtoTunnelerError

TunnelerError is an error proto for errors returned by the connection manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**err** | **str** | Original raw error | [optional] 
**retryable** | **bool** | retryable isn&#39;t used for now, but we may want to reuse it in the future. | [optional] 

## Example

```python
from openapi_client.models.tunnelv1_proto_tunneler_error import Tunnelv1ProtoTunnelerError

# TODO update the JSON string below
json = "{}"
# create an instance of Tunnelv1ProtoTunnelerError from a JSON string
tunnelv1_proto_tunneler_error_instance = Tunnelv1ProtoTunnelerError.from_json(json)
# print the JSON string representation of the object
print(Tunnelv1ProtoTunnelerError.to_json())

# convert the object into a dict
tunnelv1_proto_tunneler_error_dict = tunnelv1_proto_tunneler_error_instance.to_dict()
# create an instance of Tunnelv1ProtoTunnelerError from a dict
tunnelv1_proto_tunneler_error_from_dict = Tunnelv1ProtoTunnelerError.from_dict(tunnelv1_proto_tunneler_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


