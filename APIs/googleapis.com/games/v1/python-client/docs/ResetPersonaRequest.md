# ResetPersonaRequest

Request to remove all Recall tokens associated with a persona for an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**persona** | **str** | Value of the &#39;persona&#39; field as it was provided by the client in LinkPersona RPC | [optional] 

## Example

```python
from openapi_client.models.reset_persona_request import ResetPersonaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResetPersonaRequest from a JSON string
reset_persona_request_instance = ResetPersonaRequest.from_json(json)
# print the JSON string representation of the object
print(ResetPersonaRequest.to_json())

# convert the object into a dict
reset_persona_request_dict = reset_persona_request_instance.to_dict()
# create an instance of ResetPersonaRequest from a dict
reset_persona_request_from_dict = ResetPersonaRequest.from_dict(reset_persona_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


