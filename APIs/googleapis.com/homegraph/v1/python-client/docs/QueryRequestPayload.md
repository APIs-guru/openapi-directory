# QueryRequestPayload

Payload containing device IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[AgentDeviceId]**](AgentDeviceId.md) | Third-party device IDs for which to get the device states. | [optional] 

## Example

```python
from openapi_client.models.query_request_payload import QueryRequestPayload

# TODO update the JSON string below
json = "{}"
# create an instance of QueryRequestPayload from a JSON string
query_request_payload_instance = QueryRequestPayload.from_json(json)
# print the JSON string representation of the object
print(QueryRequestPayload.to_json())

# convert the object into a dict
query_request_payload_dict = query_request_payload_instance.to_dict()
# create an instance of QueryRequestPayload from a dict
query_request_payload_from_dict = QueryRequestPayload.from_dict(query_request_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


