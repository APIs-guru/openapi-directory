# Tunnelv1ProtoTunnelerInfo

TunnelerInfo contains metadata about tunneler launched by connection manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backoff_retry_count** | **int** | backoff_retry_count stores the number of times the tunneler has been retried by tunManager for current backoff sequence. Gets reset to 0 if time difference between 2 consecutive retries exceeds backoffRetryResetTime. | [optional] 
**id** | **str** | id is the unique id of a tunneler. | [optional] 
**latest_err** | [**Tunnelv1ProtoTunnelerError**](Tunnelv1ProtoTunnelerError.md) |  | [optional] 
**latest_retry_time** | **str** | latest_retry_time stores the time when the tunneler was last restarted. | [optional] 
**total_retry_count** | **int** | total_retry_count stores the total number of times the tunneler has been retried by tunManager. | [optional] 

## Example

```python
from openapi_client.models.tunnelv1_proto_tunneler_info import Tunnelv1ProtoTunnelerInfo

# TODO update the JSON string below
json = "{}"
# create an instance of Tunnelv1ProtoTunnelerInfo from a JSON string
tunnelv1_proto_tunneler_info_instance = Tunnelv1ProtoTunnelerInfo.from_json(json)
# print the JSON string representation of the object
print(Tunnelv1ProtoTunnelerInfo.to_json())

# convert the object into a dict
tunnelv1_proto_tunneler_info_dict = tunnelv1_proto_tunneler_info_instance.to_dict()
# create an instance of Tunnelv1ProtoTunnelerInfo from a dict
tunnelv1_proto_tunneler_info_from_dict = Tunnelv1ProtoTunnelerInfo.from_dict(tunnelv1_proto_tunneler_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


