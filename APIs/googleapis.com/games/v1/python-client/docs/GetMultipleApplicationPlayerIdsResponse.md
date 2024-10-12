# GetMultipleApplicationPlayerIdsResponse

Response message for GetMultipleApplicationPlayerIds rpc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**player_ids** | [**List[ApplicationPlayerId]**](ApplicationPlayerId.md) | Output only. The requested applications along with the scoped ids for tha player, if that player has an id for the application. If not, the application is not included in the response. | [optional] [readonly] 

## Example

```python
from openapi_client.models.get_multiple_application_player_ids_response import GetMultipleApplicationPlayerIdsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetMultipleApplicationPlayerIdsResponse from a JSON string
get_multiple_application_player_ids_response_instance = GetMultipleApplicationPlayerIdsResponse.from_json(json)
# print the JSON string representation of the object
print(GetMultipleApplicationPlayerIdsResponse.to_json())

# convert the object into a dict
get_multiple_application_player_ids_response_dict = get_multiple_application_player_ids_response_instance.to_dict()
# create an instance of GetMultipleApplicationPlayerIdsResponse from a dict
get_multiple_application_player_ids_response_from_dict = GetMultipleApplicationPlayerIdsResponse.from_dict(get_multiple_application_player_ids_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


