# SharedConnectionResponse

SharedConnectionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential_type** | **str** | the type of the credential | [optional] 
**display_name** | **str** | display name of shared connection | 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira | 

## Example

```python
from openapi_client.models.shared_connection_response import SharedConnectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SharedConnectionResponse from a JSON string
shared_connection_response_instance = SharedConnectionResponse.from_json(json)
# print the JSON string representation of the object
print(SharedConnectionResponse.to_json())

# convert the object into a dict
shared_connection_response_dict = shared_connection_response_instance.to_dict()
# create an instance of SharedConnectionResponse from a dict
shared_connection_response_from_dict = SharedConnectionResponse.from_dict(shared_connection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


