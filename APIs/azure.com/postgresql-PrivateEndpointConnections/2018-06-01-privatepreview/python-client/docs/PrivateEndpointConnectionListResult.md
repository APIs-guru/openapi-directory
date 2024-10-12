# PrivateEndpointConnectionListResult

A list of private endpoint connections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[PrivateEndpointConnection]**](PrivateEndpointConnection.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.private_endpoint_connection_list_result import PrivateEndpointConnectionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateEndpointConnectionListResult from a JSON string
private_endpoint_connection_list_result_instance = PrivateEndpointConnectionListResult.from_json(json)
# print the JSON string representation of the object
print(PrivateEndpointConnectionListResult.to_json())

# convert the object into a dict
private_endpoint_connection_list_result_dict = private_endpoint_connection_list_result_instance.to_dict()
# create an instance of PrivateEndpointConnectionListResult from a dict
private_endpoint_connection_list_result_from_dict = PrivateEndpointConnectionListResult.from_dict(private_endpoint_connection_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


