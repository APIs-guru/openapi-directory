# QueryResponsePayload

Payload containing device states information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | **Dict[str, Dict[str, object]]** | States of the devices. Map of third-party device ID to struct of device states. | [optional] 

## Example

```python
from openapi_client.models.query_response_payload import QueryResponsePayload

# TODO update the JSON string below
json = "{}"
# create an instance of QueryResponsePayload from a JSON string
query_response_payload_instance = QueryResponsePayload.from_json(json)
# print the JSON string representation of the object
print(QueryResponsePayload.to_json())

# convert the object into a dict
query_response_payload_dict = query_response_payload_instance.to_dict()
# create an instance of QueryResponsePayload from a dict
query_response_payload_from_dict = QueryResponsePayload.from_dict(query_response_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


