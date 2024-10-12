# ServerListingResponse

The results of listing servers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**servers** | [**List[ExtendedServerInfo]**](ExtendedServerInfo.md) |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.server_listing_response import ServerListingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ServerListingResponse from a JSON string
server_listing_response_instance = ServerListingResponse.from_json(json)
# print the JSON string representation of the object
print(ServerListingResponse.to_json())

# convert the object into a dict
server_listing_response_dict = server_listing_response_instance.to_dict()
# create an instance of ServerListingResponse from a dict
server_listing_response_from_dict = ServerListingResponse.from_dict(server_listing_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


