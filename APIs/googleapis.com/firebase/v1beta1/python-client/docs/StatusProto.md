# StatusProto

Wire-format for a Status object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_code** | **int** | The canonical error code (see codes.proto) that most closely corresponds to this status. This may be missing, and in the common case of the generic space, it definitely will be. | [optional] 
**code** | **int** | Numeric code drawn from the space specified below. Often, this is the canonical error space, and code is drawn from google3/util/task/codes.proto | [optional] 
**message** | **str** | Detail message | [optional] 
**message_set** | **object** | This is proto2&#39;s version of MessageSet. | [optional] 
**space** | **str** | The following are usually only present when code !&#x3D; 0 Space to which this status belongs | [optional] 

## Example

```python
from openapi_client.models.status_proto import StatusProto

# TODO update the JSON string below
json = "{}"
# create an instance of StatusProto from a JSON string
status_proto_instance = StatusProto.from_json(json)
# print the JSON string representation of the object
print(StatusProto.to_json())

# convert the object into a dict
status_proto_dict = status_proto_instance.to_dict()
# create an instance of StatusProto from a dict
status_proto_from_dict = StatusProto.from_dict(status_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


