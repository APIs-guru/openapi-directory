# TerminateSessionRequest

A request to terminate an interactive session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Optional. A unique ID used to identify the request. If the service receives two TerminateSessionRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.TerminateSessionRequest)s with the same ID, the second request is ignored.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. | [optional] 

## Example

```python
from openapi_client.models.terminate_session_request import TerminateSessionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TerminateSessionRequest from a JSON string
terminate_session_request_instance = TerminateSessionRequest.from_json(json)
# print the JSON string representation of the object
print(TerminateSessionRequest.to_json())

# convert the object into a dict
terminate_session_request_dict = terminate_session_request_instance.to_dict()
# create an instance of TerminateSessionRequest from a dict
terminate_session_request_from_dict = TerminateSessionRequest.from_dict(terminate_session_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


