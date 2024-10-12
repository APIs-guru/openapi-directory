# ResetPersonaResponse

Response for the ResetPersona RPC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unlinked** | **bool** | Required. Whether any tokens were unlinked as a result of this request. | [optional] 

## Example

```python
from openapi_client.models.reset_persona_response import ResetPersonaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResetPersonaResponse from a JSON string
reset_persona_response_instance = ResetPersonaResponse.from_json(json)
# print the JSON string representation of the object
print(ResetPersonaResponse.to_json())

# convert the object into a dict
reset_persona_response_dict = reset_persona_response_instance.to_dict()
# create an instance of ResetPersonaResponse from a dict
reset_persona_response_from_dict = ResetPersonaResponse.from_dict(reset_persona_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


