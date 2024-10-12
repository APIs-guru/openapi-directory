# SharedConnectionRequest

SharedConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential_type** | **str** | credential type of the shared connection. Values can be credentials|certificate | [optional] [default to 'credentials']
**data** | [**AppleConnectionSecretRequestAllOfData**](AppleConnectionSecretRequestAllOfData.md) |  | [optional] 
**display_name** | **str** | display name of shared connection | [optional] 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate | 

## Example

```python
from openapi_client.models.shared_connection_request import SharedConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SharedConnectionRequest from a JSON string
shared_connection_request_instance = SharedConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(SharedConnectionRequest.to_json())

# convert the object into a dict
shared_connection_request_dict = shared_connection_request_instance.to_dict()
# create an instance of SharedConnectionRequest from a dict
shared_connection_request_from_dict = SharedConnectionRequest.from_dict(shared_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


