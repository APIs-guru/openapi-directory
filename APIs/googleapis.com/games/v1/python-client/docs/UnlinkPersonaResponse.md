# UnlinkPersonaResponse

Response for the UnlinkPersona RPC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unlinked** | **bool** | Required. Whether a Recall token specified by the request was deleted. Can be &#39;false&#39; when there were no Recall tokens satisfied the criteria from the request. | [optional] 

## Example

```python
from openapi_client.models.unlink_persona_response import UnlinkPersonaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UnlinkPersonaResponse from a JSON string
unlink_persona_response_instance = UnlinkPersonaResponse.from_json(json)
# print the JSON string representation of the object
print(UnlinkPersonaResponse.to_json())

# convert the object into a dict
unlink_persona_response_dict = unlink_persona_response_instance.to_dict()
# create an instance of UnlinkPersonaResponse from a dict
unlink_persona_response_from_dict = UnlinkPersonaResponse.from_dict(unlink_persona_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


