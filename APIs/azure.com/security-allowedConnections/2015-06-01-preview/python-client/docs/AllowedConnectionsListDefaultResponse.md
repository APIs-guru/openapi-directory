# AllowedConnectionsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AllowedConnectionsListDefaultResponseError**](AllowedConnectionsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.allowed_connections_list_default_response import AllowedConnectionsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AllowedConnectionsListDefaultResponse from a JSON string
allowed_connections_list_default_response_instance = AllowedConnectionsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AllowedConnectionsListDefaultResponse.to_json())

# convert the object into a dict
allowed_connections_list_default_response_dict = allowed_connections_list_default_response_instance.to_dict()
# create an instance of AllowedConnectionsListDefaultResponse from a dict
allowed_connections_list_default_response_from_dict = AllowedConnectionsListDefaultResponse.from_dict(allowed_connections_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


