# LinkPersonaRequest

Request to link an in-game account with a PGS principal (encoded in the session id).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardinality_constraint** | **str** | Required. Cardinality constraint to observe when linking a persona to a player in the scope of a game. | [optional] 
**conflicting_links_resolution_policy** | **str** | Required. Resolution policy to apply when the linking of a persona to a player would result in violating the specified cardinality constraint. | [optional] 
**expire_time** | **str** | Input only. Optional expiration time. | [optional] 
**persona** | **str** | Required. Stable identifier of the in-game account. Please refrain from re-using the same persona for different games. | [optional] 
**session_id** | **str** | Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application. | [optional] 
**token** | **str** | Required. Value of the token to create. Opaque to Play Games and assumed to be non-stable (encrypted with key rotation). | [optional] 
**ttl** | **str** | Input only. Optional time-to-live. | [optional] 

## Example

```python
from openapi_client.models.link_persona_request import LinkPersonaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LinkPersonaRequest from a JSON string
link_persona_request_instance = LinkPersonaRequest.from_json(json)
# print the JSON string representation of the object
print(LinkPersonaRequest.to_json())

# convert the object into a dict
link_persona_request_dict = link_persona_request_instance.to_dict()
# create an instance of LinkPersonaRequest from a dict
link_persona_request_from_dict = LinkPersonaRequest.from_dict(link_persona_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


