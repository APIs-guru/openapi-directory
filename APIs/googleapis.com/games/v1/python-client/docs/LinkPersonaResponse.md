# LinkPersonaResponse

Outcome of a persona linking attempt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | Output only. State of a persona linking attempt. | [optional] [readonly] 

## Example

```python
from openapi_client.models.link_persona_response import LinkPersonaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LinkPersonaResponse from a JSON string
link_persona_response_instance = LinkPersonaResponse.from_json(json)
# print the JSON string representation of the object
print(LinkPersonaResponse.to_json())

# convert the object into a dict
link_persona_response_dict = link_persona_response_instance.to_dict()
# create an instance of LinkPersonaResponse from a dict
link_persona_response_from_dict = LinkPersonaResponse.from_dict(link_persona_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


