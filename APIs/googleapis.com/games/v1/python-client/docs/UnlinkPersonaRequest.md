# UnlinkPersonaRequest

Request to remove a Recall token linking PGS principal and an in-game account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**persona** | **str** | Value of the &#39;persona&#39; field as it was provided by the client in LinkPersona RPC | [optional] 
**session_id** | **str** | Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application. | [optional] 
**token** | **str** | Value of the Recall token as it was provided by the client in LinkPersona RPC | [optional] 

## Example

```python
from openapi_client.models.unlink_persona_request import UnlinkPersonaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnlinkPersonaRequest from a JSON string
unlink_persona_request_instance = UnlinkPersonaRequest.from_json(json)
# print the JSON string representation of the object
print(UnlinkPersonaRequest.to_json())

# convert the object into a dict
unlink_persona_request_dict = unlink_persona_request_instance.to_dict()
# create an instance of UnlinkPersonaRequest from a dict
unlink_persona_request_from_dict = UnlinkPersonaRequest.from_dict(unlink_persona_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


