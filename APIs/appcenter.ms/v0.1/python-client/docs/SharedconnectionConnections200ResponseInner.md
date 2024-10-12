# SharedconnectionConnections200ResponseInner

SharedConnectionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential_type** | **str** | the type of the credential | [optional] 
**display_name** | **str** | display name of shared connection | 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira | 

## Example

```python
from openapi_client.models.sharedconnection_connections200_response_inner import SharedconnectionConnections200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of SharedconnectionConnections200ResponseInner from a JSON string
sharedconnection_connections200_response_inner_instance = SharedconnectionConnections200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(SharedconnectionConnections200ResponseInner.to_json())

# convert the object into a dict
sharedconnection_connections200_response_inner_dict = sharedconnection_connections200_response_inner_instance.to_dict()
# create an instance of SharedconnectionConnections200ResponseInner from a dict
sharedconnection_connections200_response_inner_from_dict = SharedconnectionConnections200ResponseInner.from_dict(sharedconnection_connections200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


