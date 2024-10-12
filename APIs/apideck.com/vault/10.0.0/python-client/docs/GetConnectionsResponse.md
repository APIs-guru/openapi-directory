# GetConnectionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Connection]**](Connection.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_connections_response import GetConnectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetConnectionsResponse from a JSON string
get_connections_response_instance = GetConnectionsResponse.from_json(json)
# print the JSON string representation of the object
print(GetConnectionsResponse.to_json())

# convert the object into a dict
get_connections_response_dict = get_connections_response_instance.to_dict()
# create an instance of GetConnectionsResponse from a dict
get_connections_response_from_dict = GetConnectionsResponse.from_dict(get_connections_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


