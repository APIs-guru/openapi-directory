# Target

A specification of a set of documents to listen to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**DocumentsTarget**](DocumentsTarget.md) |  | [optional] 
**expected_count** | **int** | The number of documents that last matched the query at the resume token or read time. This value is only relevant when a &#x60;resume_type&#x60; is provided. This value being present and greater than zero signals that the client wants &#x60;ExistenceFilter.unchanged_names&#x60; to be included in the response. | [optional] 
**once** | **bool** | If the target should be removed once it is current and consistent. | [optional] 
**query** | [**QueryTarget**](QueryTarget.md) |  | [optional] 
**read_time** | **str** | Start listening after a specific &#x60;read_time&#x60;. The client must know the state of matching documents at this time. | [optional] 
**resume_token** | **bytearray** | A resume token from a prior TargetChange for an identical target. Using a resume token with a different target is unsupported and may fail. | [optional] 
**target_id** | **int** | The target ID that identifies the target on the stream. Must be a positive number and non-zero. If &#x60;target_id&#x60; is 0 (or unspecified), the server will assign an ID for this target and return that in a &#x60;TargetChange::ADD&#x60; event. Once a target with &#x60;target_id&#x3D;0&#x60; is added, all subsequent targets must also have &#x60;target_id&#x3D;0&#x60;. If an &#x60;AddTarget&#x60; request with &#x60;target_id !&#x3D; 0&#x60; is sent to the server after a target with &#x60;target_id&#x3D;0&#x60; is added, the server will immediately send a response with a &#x60;TargetChange::Remove&#x60; event. Note that if the client sends multiple &#x60;AddTarget&#x60; requests without an ID, the order of IDs returned in &#x60;TargetChage.target_ids&#x60; are undefined. Therefore, clients should provide a target ID instead of relying on the server to assign one. If &#x60;target_id&#x60; is non-zero, there must not be an existing active target on this stream with the same ID. | [optional] 

## Example

```python
from openapi_client.models.target import Target

# TODO update the JSON string below
json = "{}"
# create an instance of Target from a JSON string
target_instance = Target.from_json(json)
# print the JSON string representation of the object
print(Target.to_json())

# convert the object into a dict
target_dict = target_instance.to_dict()
# create an instance of Target from a dict
target_from_dict = Target.from_dict(target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


